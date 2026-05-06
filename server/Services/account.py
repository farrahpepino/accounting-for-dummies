from Repositories.account import Account_Repository
from DTOs.account import Account_Dto

class Account_Service:
    
    def __init__(self):
        self.repository = Account_Repository()
        
    def create_account (self, db, account: Account_Dto):
        return self.repository.create_account(db, account)
    
    def get_accounts (self, db, user_id: str):
        return self.repository.get_accounts(db, user_id)
    
    def delete_account(self, db, id: str):
        return self.repository.delete_account(db, id)