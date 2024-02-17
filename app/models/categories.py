#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from models import Base


class Category(Base):
    """ Category model for storing category data """
    __tablename__ = 'categories'
    name = Column(String(128), nullable=False)
    description = Column(String(255), nullable=True)
    tasks = relationship("Task", back_populates="category")
    
    def __init__(self, *args, **kwargs):
        """ Initialize the Category model """
        super().__init__(*args, **kwargs)
