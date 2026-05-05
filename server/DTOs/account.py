from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Account_Dto(BaseModel):
    id: Optional[str] = None
    user_id: str
    type: str 
    bank: str 
    balance: Optional[float] = 0.0
    date: Optional[datetime] = None
    last_digits: int