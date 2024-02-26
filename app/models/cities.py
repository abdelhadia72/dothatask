#!/usr/bin/env python3
from sqlalchemy import Column, String
from models.base_model import Base, BaseModle



class City(Base, BaseModle):
    """ City Module storing cities """
    __tablename__ = "cities"
    name = Column(String(100), nullable=False)


    def __init__ (self, *args, **kwargs):
        """ Initialize the City model """
        super().__init__(*args, **kwargs)
