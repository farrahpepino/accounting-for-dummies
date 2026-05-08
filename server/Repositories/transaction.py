from sqlalchemy.orm import Session, joinedload
from Schemas.transaction import Transaction

from DTOs.transaction import Transaction_Dto

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
    
    def delete_transaction(self, db:Session, id: str):
        transaction = db.query(Transaction).filter(Transaction.id == id).first()
        
        if not transaction:
            return None
        
        db.delete(transaction)
        db.commit()
        
        return True
        