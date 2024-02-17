#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from models import Base


class Image(Base):
    """ Image model for storing image data """
    __tablename__ = 'images'
    url = Column(String(255), nullable=False)

    def __init__(self, *args, **kwargs):
        """ Initialize the Image model """
        super().__init__(*args, **kwargs)