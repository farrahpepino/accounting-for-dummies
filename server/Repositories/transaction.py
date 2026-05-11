from sqlalchemy.orm import Session, joinedload
from Schemas.transaction import Transaction

from DTOs.transaction import Transaction_Dto, Partial_Transaction_Dto

class Transaction_Repository:
    def create_transaction(self, db:Session, transaction_dto: Transaction_Dto):
        transaction = Transaction(**transaction_dto.model_dump())
    
        db.add(transaction)
        db.commit()
        db.refresh(transaction)
        return transaction
    
    def get_transactions(
    self,
    db: Session,
    type: str,
    user_id: str,
    page_num: int = 1,
    page_size: int = 7
    ):
            
        offset = (page_num - 1) * page_size

        query = (
            db.query(Transaction)
            .filter(Transaction.user_id == user_id)
            .filter(Transaction.acc_1_r.has(type=type))
        )

        total = query.count()

        transactions = (
            query
            .options(
                joinedload(Transaction.acc_1_r),
                joinedload(Transaction.acc_2_r)
            )
            .order_by(Transaction.date.desc()) 
            .offset(offset)
            .limit(page_size)
            .all()
        )

        total_pages = (total + page_size - 1) // page_size

        return {
            "transactions": transactions,
            "total_pages": total_pages
        }
    
    def delete_transaction(self, db: Session, partial_transaction: Partial_Transaction_Dto):

        transaction = db.query(Transaction).filter(
            Transaction.id == partial_transaction.id
        ).first()

        if not transaction:
            return None

        transaction_2 = None

        if transaction.acc_2:
            transaction_2 = db.query(Transaction).filter(
                Transaction.acc_1 == transaction.acc_2
            ).first()

        db.delete(transaction)

        if transaction_2:
            db.delete(transaction_2)

        db.commit()

        return True
        