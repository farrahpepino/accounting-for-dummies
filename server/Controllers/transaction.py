from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from Services.transaction import Transaction_Service
from DTOs.transaction import Transaction_Dto

router = APIRouter()
service = Transaction_Service()

@router.post("/transaction/create-transaction", response_model=Transaction_Dto)
def create_transaction(body: Transaction_Dto, db: Session = Depends(get_db)):
    return service.create_transaction(db, body)

@router.get("/transaction/get-transactions/{type}", response_model=List[Transaction_Dto])
def get_transactions(type, db: Session = Depends(get_db)):
    return service.get_transactions(db, type)
