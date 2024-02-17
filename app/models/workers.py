from sqlalchemy import Base, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship


class Worker(Base):
    """ Worker model for storing worker data """
    __tablename__ = 'workers'
    image_url = Column(String(255))
    status = Column(String(128), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="worker")
    tasks = relationship("Task", back_populates="worker_task")

    def __init__(self, *args, **kwargs):
        """ Initialize the worker model """
        super().__init__(*args, **kwargs)
