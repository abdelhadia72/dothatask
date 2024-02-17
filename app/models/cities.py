#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from models import Base


class City(Base):
    """ City Module storing cities """
    __tablename__ = "cities"
    name = Column(String(120), nullable=False)
    zone = Column(String(120), nullable=False)
    postcode = Column(String(120), nullable=False)
    tasks = relationship("Task", back_populates="city")
    user = relationship("User", back_populates="city")
    def __init__ (self, *args, **kwargs):
        """ Initialize the City model """
        super().__init__(*args, **kwargs)
