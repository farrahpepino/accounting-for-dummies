from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Transaction_Dto(BaseModel):
    id: Optional[str] = None
    user_id: str
    type: str
    acc_1: str
    acc_2: Optional[str] = None
    category: Optional[str] = None
    amount: float
    balance: float
    date: datetime
    note: Optional[str] = None
    is_edited: bool = True


class Partial_Transaction_Dto(BaseModel):
    id: str
    acc_2_id: Optional[str] = None 

    
    