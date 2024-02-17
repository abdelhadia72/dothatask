#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from models import Base

class User(Base):
    """ User model for storing user data """
    __tablename__ = 'users'
    first_name = Column(String(128), nullable=True)
    last_name = Column(String(128), nullable=True)
    hashed_password = Column(String(128), nullable=False)
    email = Column(String(255), nullable=False)
    user_gender = Column(String(128), nullable=True)
    user_phone = Column(String(20), nullable=True)
    user_address = Column(String(255), nullable=True)
    city_id = Column(Integer, ForeignKey('cities.id'))
    city = relationship("City", back_populates="user")
    worker = relationship("Worker", back_populates="user")
    def __init__(self, *args, **kwargs):
        """ Initialize the User model """
        super().__init__(*args, **kwargs)
