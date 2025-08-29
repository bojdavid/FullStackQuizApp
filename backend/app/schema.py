from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class User(BaseModel):
    email: EmailStr
    username: str
    created_at: datetime
    updated_at: Optional[datetime] = None  # UpdatedAt is optional, only set when username is updated

class UserOut(User):
    id : str  = Field(..., alias="_id") 
    rank : dict

class UserCreate(BaseModel):
    email: EmailStr
    username: str


class QuestionSchema(BaseModel):
    Question: str
    CorrectOption: str
    OptionA: str
    OptionB: str
    OptionC: str
    OptionD: str
    Answer_Explanation: str
    Subject: str
    topic: str
    choice: Optional[str] = None
    createdAt: datetime
    updatedAt: Optional[datetime] = None

class Question(BaseModel):
    ID: int  # Assuming ID is an integer
    Question: str
    CorrectOption: str
    OptionA: str
    OptionB: str
    OptionC: str
    OptionD: str
    AnswerExplanation: str
    Subject: str
    topic: str
    choice: Optional[str] = None
    id: int

class QuestionOut(Question):
    id : str  = Field(..., alias="_id") 


class QuestionCreate(BaseModel):
    Question: str
    CorrectOption: str
    OptionA: str
    OptionB: str
    OptionC: str
    OptionD: str
    AnswerExplanation: str
    Subject: str
    topic: str
    choice: Optional[str] = None


class Ranking(BaseModel):
    exp: int  # Experience points
    timeOfRank: datetime