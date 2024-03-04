#!/usr/bin/env python3
""" Base model for all models in the app """
from datetime import datetime
from sqlalchemy import Column, DateTime, BigInteger
from sqlalchemy.orm import declarative_base


Base = declarative_base()

time = "%Y-%m-%d %H:%M:%S.%f"

class BaseModle:
    """ Base class for all models in the app """
    __abstract__ = True
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)


    def to_dict(self):
        dictionary = {}
        for key, value in self.__dict__.items():
            if key != '_sa_instance_state':
                dictionary[key] = value
        dictionary['__class__'] = type(self).__name__
        dictionary['created_at'] = self.created_at.strftime(time)
        dictionary['updated_at'] = self.updated_at.strftime(time)

        return dictionary
    
    # if save_fs is None:
    #     if "password" in new_dict:
    #             del new_dict["password"] 
    def __str__(self):
        """ String representation of the base model """
        return "[{}] ({}) {}".format(
            type(self).__name__, self.id, self.__dict__)

    def __repr__(self):
        """ String representation of the base model """
        return "<{}(id='{}', created_at='{}', updated_at='{}')>".format(
            type(self).__name__, self.id, self.created_at, self.updated_at)
