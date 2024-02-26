#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer, Enum, DateTime, Date
from sqlalchemy.orm import relationship
from models.base_model import Base, BaseModle


class User(Base, BaseModle):
    """ User model for storing user data """
    __tablename__ = 'users'
    first_name = Column(String(150), nullable=False)
    last_name = Column(String(150), nullable=False)
    password = Column(String(150), nullable=False)
    email = Column(String(150), nullable=False)
    gender = Column(String(120), nullable=False)
    birth_date = Column(Date, nullable=False)
    phone = Column(String(120), nullable=False)
    address = Column(String(255), nullable=True)
    type = Column(Enum('worker', 'client'), nullable=False)
    image_url = Column(Integer, ForeignKey('images.id'))
    image = relationship('Image', back_populates='user')
    city_id = Column(Integer, ForeignKey('cities.id'))
    city = relationship("City", back_populates="user")
