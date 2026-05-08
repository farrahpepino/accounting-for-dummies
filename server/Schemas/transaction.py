from sqlalchemy import Column, String, Float, Date, ForeignKey
from database import Base
import uuid
from sqlalchemy.orm import relationship

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
    
    source_account = Column(String(36), ForeignKey("accounts.id", ondelete="CASCADE"))
    destination_account = Column(String(36), ForeignKey("accounts.id"), nullable=True)
    
    source_account_r = relationship("Account", foreign_keys=[source_account])
    destination_account_r = relationship("Account", foreign_keys=[destination_account])
    
    category = Column(String(10), nullable=True)
    amount = Column(Float, nullable=False)
    date = Column(Date)    
    note = Column(String(360), nullable=True)
    
    