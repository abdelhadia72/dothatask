#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer, Text, DateTime
from sqlalchemy.orm import relationship
from models.base_model import Base, BaseModle


class Review(Base, BaseModle):
    """ Review model for storing review data """
    __tablename__ = 'review'
    description = Column(Text, nullable=True)
    rating = Column(Integer, nullable=False)
    client_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    worker_id = Column(Integer, ForeignKey('workers.id'), nullable=False)

