from sqlalchemy.orm import Session
from Schemas.transaction import Transaction

from DTOs.transaction import Transaction_Dto

class Transaction_Repository:
    def create_transaction(self, db:Session, transaction_dto: Transaction_Dto):
        transaction = transaction_dto(**transaction_dto.model_dump())
    
        db.add(transaction)
        db.commit()
        db.refresh(transaction)
        return transaction
    
    def get_transactions(self, db:Session, type: str, user_id: str):
        return db.query(Transaction).filter(Transaction.type == type, Transaction.user_id == user_id).all()
    
    def delete_transaction(self, db:Session, id: str):
        transaction = db.query(Transaction).filter(Transaction.id == id).first()
        
        if not transaction:
            return None
        
        db.delete(transaction)
        db.commit()
        
        return True
        