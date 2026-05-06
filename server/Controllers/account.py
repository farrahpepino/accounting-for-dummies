from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from Services.account import Account_Service
from DTOs.account import Account_Dto

router = APIRouter()
service = Account_Service()

@router.post("/account/create-account", response_model=Account_Dto)
def create_account(body: Account_Dto, db: Session = Depends(get_db)):
    return service.create_account(db, body)

@router.get("/account/get-accounts/{user_id}", response_model=List[Account_Dto])
def get_accounts(user_id, db: Session = Depends(get_db)):
    return service.get_accounts(db, user_id)
