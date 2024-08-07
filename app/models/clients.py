#!/usr/bin/env python3
from sqlalchemy import Column, String, Text, Integer, ForeignKey
from models.base_model import Base, BaseModle


class Client(Base, BaseModle):
    """ Client model for storing client data """
    __tablename__ = 'clients'
    description = Column(Text)
    status = Column(String(255), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
