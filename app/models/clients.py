#!/usr/bin/env python3
from sqlalchemy import Column, String, Text
from models.base_model import Base, BaseModel
from .users import User

class Client(Base, BaseModel, User):
    __tablename__ = 'clients'

    description = Column(Text)
    status = Column(String(255), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'client',
    }