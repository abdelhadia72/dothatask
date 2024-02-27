#!/usr/bin/env python3
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from models.base_model import Base, BaseModle



class Image(Base, BaseModle):
    __tablename__ = 'images'
    image_url = Column(String(255), nullable=False)
    # user = relationship('User', back_populates='image') 
