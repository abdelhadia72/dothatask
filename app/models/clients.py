#!/usr/bin/env python3
from sqlalchemy import Column, String, Text, Integer, DateTime, Date
from sqlalchemy.orm import relationship
from . import Base, BaseModle
from .users import User

class Client(Base, BaseModle, User):
    __tablename__ = 'clients'

    description = Column(Text)
    status = Column(String(255), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'client',
    }