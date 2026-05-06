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

@router.get("/transactions/{type}", response_model=List[Transaction_Dto])
def get_transactions(type, db: Session = Depends(get_db)):
    
    transactions = service.get_transactions(db, type)

    if transactions is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Transactions not found"
        )
        
    return transactions

@router.delete("transactions/{id}")
def delete_transaction(id, db: Session = Depends(get_db)):
    deleted = service.delete_transaction(db, id)
    
    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Transaction could not be deleted"
        )
        
    return deleted