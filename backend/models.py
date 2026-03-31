from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime

class DemoRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    company: str = Field(..., min_length=1, max_length=100)
    request_type: str = Field(default="demo")  # "demo" or "report"

class DemoRequestResponse(BaseModel):
    id: str
    success: bool
    message: str
