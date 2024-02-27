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

    # def tryme(self):
    #     return "I'm working!"

    # def add_city(self):
    #     db = self.SessionLocal()
    #     try:
    #         city = City(name="San Francisco")
    #         db.add(city)
    #         db.commit()
    #     finally:
    #         db.close()

    # def add_client(self, first_name, last_name, password, email, gender, birth_date, phone, address, description, status):
    #     db = self.SessionLocal()
    #     try:
    #         client = Client(
    #             first_name=first_name,
    #             last_name=last_name,
    #             password=password,
    #             email=email,
    #             gender=gender,
    #             birth_date=birth_date,
    #             phone=phone,
    #             address=address,
    #             description=description,
    #             status=status,
    #             image_id=1,
    #             type='client'
    #         )
    #         db.add(client)
    #         db.commit()
    #     finally:
    #         db.close()

# DB_USER = 'root'
# DB_PASSWORD = 'root'
# DB_HOST = 'localhost'
# # DB_NAME = 'TEST_DB'
# DB_NAME = 'DB_D'

# db_manager = DBManager(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)
# db_manager.show(Client)
# db_manager.show(Worker)
# db_manager.show(User)
# db_manager.show(Review)
# db_manager.show(Image)
# db_manager.show(WorkerImage)
# db_manager.show(Category)
# db_manager.show(City)
# db_manager.add_city()

# db_manager.add_client(
#     first_name='John',
#     last_name='Doe',
#     password='password123',
#     email='john.doe@example.com',
#     gender='Male',
#     birth_date='1990-01-01',
#     phone='1234567890',
#     address='123 Main St, City, Country',
#     description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
#     status='Active'
# )