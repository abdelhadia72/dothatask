#!/usr/bin/env python3
from sqlalchemy import Column, String, ForeignKey, Integer, DateTime
from models.base_model import Base, BaseModle


class WorkerImage(Base, BaseModle):
    """ WorkerImage model for storing worker images """
    __tablename__ = 'worker_image'
    image_url = Column(String(255), nullable=False)
    worker_id = Column(Integer, ForeignKey('workers.id'), nullable=False)
