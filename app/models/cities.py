#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, DateTime
from sqlalchemy.orm import relationship
from models.base_model import Base, BaseModle
from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()


class City(Base, BaseModle):
    """ City Module storing cities """
    __tablename__ = "cities"
    name = Column(String(100), nullable=False)
    user = relationship('User', back_populates='city')


    def __init__ (self, *args, **kwargs):
        """ Initialize the City model """
        super().__init__(*args, **kwargs)
