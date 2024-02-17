#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from models import Base

class Task(Base):
    """ Task model for storing task data """
    __tablename__ = 'tasks'
    title = Column(String(128), nullable=False)
    description = Column(String(255), nullable=False)
    category_id = Column(Integer, ForeignKey('categories.id'))
    category = relationship("Category", back_populates="tasks")
    city_id = Column(Integer, ForeignKey('cities.id'))
    city = relationship("City", back_populates="tasks")
    worker_id = Column(Integer, ForeignKey('users.id'))
    worker = relationship("User", back_populates="tasks")
    worker_task = relationship("Worker", back_populates="worker_task")
    def __init__(self, *args, **kwargs):
        """ Initialize the Task model """
        super().__init__(*args, **kwargs)