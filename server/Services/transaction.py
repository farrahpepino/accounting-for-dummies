from Repositories.transaction import Transaction_Repository
from DTOs.transaction import Transaction_Dto

class Transaction_Service:
    def __init__(self):
        self.repository = Transaction_Repository()
        
    def create_transaction(self, db, transaction: Transaction_Dto):
        return self.repository.create_transaction(db, transaction)
    
    def get_transactions(self, db, type: str, user_id: str):
        return self.repository.get_transactions(db, type, user_id)
    
    def delete_transaction(self, db, id: str):
        return self.repository.delete_transaction(db, id)