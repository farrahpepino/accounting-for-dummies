from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from Services.auth import Auth_Service
from DTOs.token import Token_Request
from DTOs.user import User_Dto

router = APIRouter()
auth_service = Auth_Service()


@router.post("/auth/google", response_model=User_Dto)
def google_auth(body: Token_Request, db: Session = Depends(get_db)):
    return auth_service.authenticate_account(db, body.token)