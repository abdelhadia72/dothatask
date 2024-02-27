#!/usr/bin/env python3
from sqlalchemy import Column, ForeignKey, Integer, Text, DateTime
from models.base_model import Base, BaseModle


class Review(Base, BaseModle):
    """ Review model for storing review data """
    __tablename__ = 'review'
    description = Column(Text, nullable=True)
    rating = Column(Integer, nullable=False)
    client_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    worker_id = Column(Integer, ForeignKey('workers.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'rating': self.rating,
            'client_id': self.client_id,
            'worker_id': self.worker_id,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }