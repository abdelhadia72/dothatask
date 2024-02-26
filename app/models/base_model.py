#!/usr/bin/env python3
""" Base model for all models in the app """
from datetime import datetime
from sqlalchemy import Column, DateTime, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import declarative_base
import uuid

Base = declarative_base()
class BaseModle:
    """ Base class for all models in the app """
    __abstract__ = True
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    # FIXME add the uuid now you can't as the database already has the id as integer
    # id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __str__(self):
        """ String representation of the base model """
        return "[{}] ({}) {}".format(
            type(self).__name__, self.id, self.__dict__)

    def __repr__(self):
        """ String representation of the base model """
        return "<{}(id='{}', created_at='{}', updated_at='{}')>".format(
            type(self).__name__, self.id, self.created_at, self.updated_at)