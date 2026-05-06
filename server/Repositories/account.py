from sqlalchemy.orm import Session
from Schemas.account import Account

from DTOs.account import Account_Dto

class Account_Repository:
    def create_account(self, db:Session, account_dto: Account_Dto):
        account = Account(**account_dto.model_dump())
    
        db.add(account)
        db.commit()
        db.refresh(account)
        return account
    
    def get_accounts(self, db:Session, user_id: str):
        return db.query(Account).filter(Account.user_id == user_id).all()
    
    def delete_account(self, db:Session, id: str):
        account = db.query(Account).filter(Account.id == id).first()
        
        if not account:
            return None
        
        db.delete(account)
        db.commit()
        
        return True 