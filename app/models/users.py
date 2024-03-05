#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer, Enum, Date, BigInteger
from models.base_model import Base, BaseModle


class User(Base, BaseModle):
    """ User model for storing user data """
    __tablename__ = 'users'
    first_name = Column(String(150), nullable=False)
    last_name = Column(String(150), nullable=False)
    password = Column(String(150), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    gender = Column(String(120), nullable=False)
    birth_date = Column(Date, nullable=False)
    phone = Column(String(120), nullable=False)
    address = Column(String(255), nullable=True)
    type = Column(Enum('worker', 'client', 'admin', 'user'), nullable=False)
    image_url = Column(String(255), nullable=True)
    city_id = Column(Integer, ForeignKey('cities.id'), nullable=False)
