from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from Services.auth import Auth_Service
from Exceptions.auth import InvalidTokenError
from DTOs.token import Token_Request
from DTOs.user import User_Dto

router = APIRouter()
auth_service = Auth_Service()

@router.post("/auth/google", response_model=User_Dto)
def google_auth(body: Token_Request, db: Session = Depends(get_db)):
    try:
        return auth_service.authenticate_account(db, body.token)

    except InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Google token"
        )