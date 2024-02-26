#!/usr/bin/env python3
from sqlalchemy import Column, String, Text, DateTime, Integer
from sqlalchemy.orm import relationship
from models import Base, BaseModle


class Category(Base, BaseModle):
    """ Category model for storing category data """
    __tablename__ = 'categories'
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    worker = relationship('Worker', back_populates='category')

    def __init__(self, *args, **kwargs):
        """ Initialize the Category model """
        super().__init__(*args, **kwargs)
