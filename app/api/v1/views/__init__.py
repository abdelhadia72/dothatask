#!/usr/bin/python3
""" Blueprint for API """
from flask import Blueprint

app_v1 = Blueprint('app_v1', __name__, url_prefix='/api/v1')

from api.v1.views.usersView import *
from api.v1.views.authView import *


