from sqlalchemy import Column, String, Integer, DateTime
from datetime import datetime
from database import Base
import uuid


class Account(Base):
    __tablename__ = "accounts"
    
    id = Column(String(36), primary_key=True, index=True, unique=True, default=lambda:str(uuid.uuid4())) 
    user_id = Column(String(36), index=True)
    type = Column(String(10), index=True)
    bank = Column(String(255), index=True)
    balance = Column(Integer)
    date = Column(DateTime, default=datetime.now)
    last_digits = Column(Integer)
    
    
    