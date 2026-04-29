from pydantic import BaseModel

class UserDto(BaseModel):
    id: str = None
    name: str = None
    email: str = None
    password: str = None