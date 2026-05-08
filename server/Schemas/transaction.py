from sqlalchemy import Column, String, Float, Date, ForeignKey
from database import Base
import uuid


class Transaction(Base):
    __tablename__ = "transactions"
    
    id = Column(String(36), primary_key=True, index=True, unique=True, default=lambda:str(uuid.uuid4())) 
    user_id = Column(
        String(36),
        ForeignKey("users.id", ondelete="CASCADE"),
        index=True,
        nullable=False
    )
    type = Column(String(10), index=True)
    from_bank = Column(String(36), ForeignKey("accounts.id", ondelete="SET NULL"))
    to_bank = Column(String(36))
    category = Column(String(10))
    amount = Column(Float)
    date = Column(Date)    
    note = Column(String(360))
    
    