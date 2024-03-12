#!/usr/bin/python3
""" Blueprint for API """
from flask import Blueprint
from models.db import DBManager



app_v1 = Blueprint('app_v1', __name__, url_prefix='/api/v1')
db_manager = DBManager()
SessionLocal = db_manager.SessionLocal

from api.v1.views.usersView import *
from api.v1.views.authView import *
from api.v1.views.cityView import *
from api.v1.views.workerView import *
from api.v1.views.categoryView import *
from api.v1.views.clientView import *
from api.v1.views.reviewView import *
from api.v1.views.workerImgView import *
