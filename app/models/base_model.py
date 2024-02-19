#!/usr/bin/env python3
""" Base model for all models in the app """
from datetime import datetime
from sqlalchemy import Column, String, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()
class BaseModle:
    """ Base class for all models in the app """
    id = Column(String(60), unique=True, nullable=False, primary_key=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow())

    def __str__(self):
        """ String representation of the base model """
        return "[{}] ({}) {}".format(
            type(self).__name__, self.id, self.__dict__)
