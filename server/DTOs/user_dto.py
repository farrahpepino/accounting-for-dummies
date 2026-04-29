from pydantic import BaseModel

class User_Dto(BaseModel):
    id: str = None
    name: str = None
    email: str = None
