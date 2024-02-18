#!/usr/bin/python3
"""
Contains the class SBStorage
"""

from models.base_model import Base as BaseModel
from models.users import User
from models.categories import Category
from models.cities import City
from models.images import Image
from models.tasks import Task
from models.tasks_images import TaskImage
from models.workers import Worker
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from os import getenv

classes = {
    "User": User,
    "Category": Category,
    "City": City,
    "Image": Image,
    "Task": Task,
    "TaskImage": TaskImage,
    "Worker": Worker
}

class SBStorage:
    """Interacts with the MySQL database"""
    __engine = None
    __session = None
    Base = declarative_base()

    def __init__(self):
        """Instantiate a SBStorage object"""
        DT_MYSQL_USER = getenv('DT_MYSQL_USER')
        DT_MYSQL_PWD = getenv('DT_MYSQL_PWD')
        DT_MYSQL_HOST = getenv('DT_MYSQL_HOST')
        DT_MYSQL_DB = getenv('DT_MYSQL_DB')
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
                                    format(DT_MYSQL_USER,
                                            DT_MYSQL_PWD,
                                            DT_MYSQL_HOST,
                                            DT_MYSQL_DB))

    def all(self, cls=None):
        """Query on the current database session"""
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.__session.query(classes[clss]).all()
                for obj in objs:
                    key = obj.__class__.__name__ + '.' + obj.id
                    new_dict[key] = obj
        return (new_dict)

    def new(self, obj):
        """Add the object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """Commit all changes of the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """Delete from the current database session obj if not None"""
        if obj is not None:
            self.__session.delete(obj)

    def reload(self):
        """Reloads data from the database"""
        self.Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session


    def close(self):
        """Call remove() method on the private session attribute"""
        self.__session.remove()

    def get(self, cls, id):
        """
        Returns the object based on the class name and its ID, or
        None if not found
        """
        if cls not in classes.values():
            return None

        all_cls = SBStorage.all(cls)
        for value in all_cls.values():
            if (value.id == id):
                return value

        return None

    def count(self, cls=None):
        """
        Count the number of objects in storage
        """
        all_class = classes.values()

        if not cls:
            count = 0
            for clas in all_class:
                count += len(SBStorage.all(clas).values())
        else:
            count = len(SBStorage.all(cls).values())

        return count
