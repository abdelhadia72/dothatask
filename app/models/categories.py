#!/usr/bin/env python3
from sqlalchemy import Column, String, Text
from models.base_model import Base, BaseModle


class Category(Base, BaseModle):
    """ Category model for storing category data """
    __tablename__ = 'categories'
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
