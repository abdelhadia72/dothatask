#!/usr/bin/env python3
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import sessionmaker
from models.cities import City
from models.categories import Category
from models.images import Image
from models.users import User
from models.review import Review
from models.worker_image import WorkerImage
from models.workers import Worker
from models.clients import Client


class DBManager:
    def __init__(self):
        self.db_user = 'abdel'
        self.db_password = 'Abdo2005'
        self.db_host = 'localhost'
        self.db_name = 'DB_D'
        self.engine = create_engine(self.get_database_url())
        self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)

    def get_database_url(self):
        return f"mysql+pymysql://{self.db_user}:{self.db_password}@{self.db_host}/{self.db_name}"

    def show(self, clss):
        db = self.SessionLocal()
        try:
            elements = db.query(clss).all()
            for element in elements:
                print(element.__dict__)
            return elements
        finally:
            db.close()
    
    def get(self, clss, id):
        db = self.SessionLocal()
        try:
            element = db.query(clss).get(id)
            return element
        finally:
            db.close()

    # def add_city(self):
    #     db = self.SessionLocal()
    #     try:
    #         city = City(name="San Francisco")
    #         db.add(city)
    #         db.commit()
    #     finally:
    #         db.close()


# DB_USER = 'root'
# DB_PASSWORD = 'root'
# DB_HOST = 'localhost'
# # DB_NAME = 'TEST_DB'
# DB_NAME = 'DB_D'
