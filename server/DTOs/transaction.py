from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Transaction_Dto(BaseModel):
    id: Optional[str] = None
    user_id: str
    type: str
    from_bank: str
    to_bank: str
    category: str 
    amount: float
    date: datetime
    
    