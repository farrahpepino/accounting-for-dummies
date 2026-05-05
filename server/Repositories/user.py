from sqlalchemy.orm import Session
from Schemas.user import User

class User_Repository:
    def create_user(self, db:Session, id: str, email: str, name: str):
        user = User(
            id = id,
            email = email,
            name = name
        )
                
        db.add(user)
        db.commit()
        db.refresh(user)
        return user
    
    def get_user(self, db:Session, id: str):
        return db.query(User).filter(User.id == id).first()