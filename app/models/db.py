#!/usr/bin/env python3
""" DBManager class """
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.cities import City
from models.categories import Category
from models.users import User
from models.review import Review
from models.worker_image import WorkerImage
from models.workers import Worker
from models.clients import Client


class DBManager:
    """ DBManager class """
    def __init__(self):
        """ constructor """
        self.db_user = 'abdel'
        self.db_password = 'Abdo2005'
        self.db_host = 'localhost'
        self.db_name = 'DB_D'
        self.engine = create_engine(self.get_database_url())
        self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)


    def get_database_url(self):
        """ get database url """
        return f"mysql+pymysql://{self.db_user}:{self.db_password}@{self.db_host}/{self.db_name}"
    

    # def create_database(self):
    #     """ create database """
    #     Base = declarative_base()
    #     Base.metadata.create_all(bind=self.engine)


    def show(self, clss):
        """ get all from database """
        db = self.SessionLocal()
        try:
            elements = db.query(clss).all()
            for element in elements:
                print(element.__dict__)
            return elements
        finally:
            db.close()


    def get(self, clss, id):
        """ get from database """
        db = self.SessionLocal()
        try:
            element = db.query(clss).get(id)
            return element
        finally:
            db.close()


    def add(self, clss, data):
        """ create into database """
        db = self.SessionLocal()
        try:
            db.add(data)
            db.commit()
        finally:
            db.close()


    def update(self, clss, id, data):
        """ update into database """
        db = self.SessionLocal()
        try:
            element = db.query(clss).get(id)
            for key, value in data.items():
                setattr(element, key, value)
            db.commit()
        finally:
            db.close()


    def delete(self, clss, id):
        """ remove from database """
        db = self.SessionLocal()
        try:
            element = db.query(clss).get(id)
            db.delete(element)
            db.commit()
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

