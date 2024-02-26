#!/usr/bin/env python3
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import sessionmaker
from models.cities import City
from models.cities import City
from models.categories import Category
from models.images import Image
from models.users import User
from models.review import Review
from models.worker_images import WorkerImage
from models.worker import Worker
class DBManager:
    def __init__(self, db_user, db_password, db_host, db_name):
        self.db_user = db_user
        self.db_password = db_password
        self.db_host = db_host
        self.db_name = db_name
        self.engine = create_engine(self.get_database_url())
        self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)

    def get_database_url(self):
        return f"mysql+pymysql://{self.db_user}:{self.db_password}@{self.db_host}/{self.db_name}"

    def show(self):
        clss = City
        db = self.SessionLocal()
        try:
            elements = db.query(clss).all()
            for element in elements:
                print(element.__dict__)
            return elements
        finally:
            db.close()
    
    def show(self, clss):
        db = self.SessionLocal()
        try:
            elements = db.query(clss).all()
            for element in elements:
                print(element.__dict__)
            return elements
        finally:
            db.close()
    
    def add_city(self):
        db = self.SessionLocal()
        try:
            city = City(name="San Francisco")
            db.add(city)
            db.commit()
        finally:
            db.close()

DB_USER = 'root'
DB_PASSWORD = 'root'
DB_HOST = 'localhost'
DB_NAME = 'TEST_DB'

db_manager = DBManager(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)
# db_manager.add_city()
db_manager.show(City)