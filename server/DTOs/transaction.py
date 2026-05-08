from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Transaction_Dto(BaseModel):
    id: Optional[str] = None
    user_id: str
    type: str
    source_account: str
    destination_account: Optional[str] = None
    category: Optional[str] = None
    amount: float
    date: datetime
    note: Optional[str] = None
    
    