#!/usr/bin/env python3
from sqlalchemy import Column, Integer, String, Text, ForeignKey
from models.users import User
from models.base_model import Base, BaseModle


class Worker(Base, BaseModle):
    """ Worker model for storing worker data """
    __tablename__ = 'workers'
    title = Column(String(255), nullable=False)
    status = Column(String(20), nullable=False)
    description = Column(Text)
    category_id = Column(Integer, ForeignKey('categories.id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
