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
    
    # def get_transactions(self, db:Session, type: str, user_id: str):
    #     return db.query(Transaction)\
    #             .filter(Transaction.user_id == user_id)\
    #             .filter(Transaction.source_account_r.has(type=type))\
    #             .options(
    #                 joinedload(Transaction.source_account_r),
    #                 joinedload(Transaction.destination_account_r)
    #             )\
    #             .all()
                
    def get_transactions(
    self,
    db: Session,
    type: str,
    user_id: str,
    page: int = 1,
    page_size: int = 7
    ):
        offset = (page - 1) * page_size

        return (
            db.query(Transaction)
            .filter(Transaction.user_id == user_id)
            .filter(Transaction.source_account_r.has(type=type))
            .options(
                joinedload(Transaction.source_account_r),
                joinedload(Transaction.destination_account_r)
            )
            .order_by(Transaction.date.desc()) 
            .limit(page_size)
            .offset(offset)
            .all()
        )
    
    def delete_transaction(self, db:Session, id: str):
        transaction = db.query(Transaction).filter(Transaction.id == id).first()
        
        if not transaction:
            return None
        
        db.delete(transaction)
        db.commit()
        
        return True
        