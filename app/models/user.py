#!/usr/bin/env python3
import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Class User(Base):
    """ User model for storing user data """
    __tablename__ = 'users'
    first_name = Column(String(128), nullable=True)
    last_name = Column(String(128), nullable=True)
    hashed_password = Column(String(128), nullable=False)
    email = Column(String(255), nullable=False)
    user_gender = Column(String(128), nullable=True)
    user_phone = Column(String(20), nullable=True
    user_address = Column(String(255), nullable=True)
    city_id = realationship("City", back_populates="users")

    def __init__(self, *args, **kwargs):
        """ Initialize the user model """
        super().__init__(*args, **kwargs)
        self.id = str(uuid.uuid4())
        self.created_at = self.updated_at = datetime.now()
