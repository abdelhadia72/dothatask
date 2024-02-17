#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from models import Base

class TaskImage(Base):
    """ User model for storing TaskImage data """
    __tablename__ = 'users'
    task_id = Column(Integer, ForeignKey('tasks.id'))
    task = relationship("Task", back_populates="images")
    image_url = Column(String, ForeignKey('images.id'))
    image = relationship("Image", back_populates="tasks")

    def __init__(self, *args, **kwargs):
        """ Initialize the TaskImage model """
        super().__init__(*args, **kwargs)
