#!/usr/bin/env python3
from sqlalchemy import Column, String, Text, Integer, ForeignKey
from models.base_model import Base, BaseModle
from models.users import User

class Client(Base, BaseModle):
    __tablename__ = 'clients'

    description = Column(Text)
    status = Column(String(255), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'))
    

    # __mapper_args__ = {
    #     'polymorphic_identity': 'clients',
    # }