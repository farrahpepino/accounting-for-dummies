from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from Services.transaction import Transaction_Service
from DTOs.transaction import Transaction_Dto

router = APIRouter()
service = Transaction_Service()

@router.post("/transactions", response_model=Transaction_Dto)
def create_transaction(body: Transaction_Dto, db: Session = Depends(get_db)):
    transaction = service.create_transaction(db, body)
    
    if not transaction:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Transaction could not be created"
        ) 
        
    return transaction

@router.get("/transactions/{user_id}/{type}/{page_num}")
def get_transactions(user_id, type, page_num, db: Session = Depends(get_db)):
    page_num = int(page_num) 
    transactions = service.get_transactions(db, type, user_id, page_num)

    if transactions is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Transactions not found"
        )
        
    return transactions

@router.delete("/transaction/{id}")
def delete_transaction(id: str, db: Session = Depends(get_db)):
    deleted = service.delete_transaction(db, id)
    
    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Transaction could not be deleted"
        )
        
    return deleted

@router.get("/{user_id}/{account_type}/total")
def get_total_amount_by_account_type(user_id: str, account_type: str, db: Session = Depends(get_db)):        
    return service.get_total_amount_by_account_type(db, user_id, account_type)