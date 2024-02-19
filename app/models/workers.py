#!/usr/bin/env python3
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .base_model import Base

class Worker(Base):
    __tablename__ = 'Workers'

    worker_id = Column(Integer, primary_key=True, index=True)
    worker_name = Column(String, index=True)
    worker_email = Column(String, index=True)
    worker_phone = Column(String)
    city_id = Column(Integer)
    
    
    def to_dict(self):
        return {
            'worker_id': self.worker_id,
            'worker_name': self.worker_name,
            'worker_email': self.worker_email,
            'worker_phone': self.worker_phone,
            'city_id': self.city_id
        }