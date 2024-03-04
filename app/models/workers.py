#!/usr/bin/env python3
from sqlalchemy import Column, Integer, String, Text, ForeignKey
from models.users import User

class Worker(User):
    __tablename__ = 'workers'
    title = Column(String(255), nullable=False)
    status = Column(String(20), nullable=False)
    description = Column(Text)
    category_id = Column(Integer, ForeignKey('categories.id'))
    image_id = Column(Integer, ForeignKey('images.id'))
    user_id = Column(Integer, ForeignKey('users.id'))


    __mapper_args__ = {
        'polymorphic_identity': 'worker',
    }
