#!/usr/bin/env python3
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, DateTime
from models.review import Review
from models.cities import City
from models.users import User


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

    def show_cities(self):
        db = self.SessionLocal()
        try:
            cities = db.query(Review).all()
            for city in cities:
                print(city.__dict__)
            return cities
        finally:
            db.close()

    def add_city(self, name):
        db = self.SessionLocal()
        try:
            city = City(name=name)
            db.add(city)
            db.commit()
            return city
        finally:
            db.close()
    
    def add_review(self, description, rating, client_id, worker_id):
        db = self.SessionLocal()
        try:
            review = Review(description=description, rating=rating, client_id=client_id, worker_id=worker_id)
            db.add(review)
            db.commit()
            return review
        finally:
            db.close()

    def add_city(self, name):
        db = self.SessionLocal()
        try:
            city = City(name=name)
            db.add(city)
            db.commit()
            return city
        finally:
            db.close()
            
    def create_user(self, first_name, last_name, password, email, gender, birth_date, phone, address, type):
        db = self.SessionLocal()
        try:
            new_user = User(
                first_name=first_name,
                last_name=last_name,
                password=password,
                email=email,
                gender=gender,
                birth_date=birth_date,
                phone=phone,
                address=address,
                type=type,
            )
            db.add(new_user)
            db.commit()
            return new_user
        finally:
            db.close()


DB_USER = 'root'
DB_PASSWORD = 'root'
DB_HOST = 'localhost'
DB_NAME = 'TEST_DB'

db_manager = DBManager(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)

#* create new things
# new_city = db_manager.add_city("New York City")
# print("New city added:", new_city)

#* show all things
# db_manager.show_cities()
# new_review = db_manager.add_review("Great service!", 5, 1, 1)  # Example data, replace with actual values
# print("New review added:", new_review)

#* create cities
# new_city = db_manager.add_city("New York")
# print("New city added:", new_city)

#* create users
new_user = db_manager.create_user("John", "Doe", "password123", "john@example.com", "Male", "1990-01-01", "123456789", "123 Main St", "worker")
print("New user created:", new_user)