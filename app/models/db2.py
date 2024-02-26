from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base
from models.categories import Category
from models.cities import City
from models.clients import Client
from models.images import WorkerImage
from models.review import Review
from models.users import User
from models.workers import Worker

# Define your database connection parameters
DB_USER = 'your_username'
DB_PASSWORD = 'your_password'
DB_HOST = 'localhost'
DB_NAME = 'your_database_name'

# Create an engine to connect to your MySQL database
SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create all tables defined in your models
Base.metadata.create_all(bind=engine)