#!/usr/bin/python3
""" Blueprint for API """
from flask import Blueprint
from models.db import DBManager



app_v1 = Blueprint('app_v1', __name__, url_prefix='/api/v1')

db_manager = DBManager()
SessionLocal = db_manager.SessionLocal

from api.v1.views.usersView import *
from api.v1.views.authView import *
