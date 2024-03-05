""" Authentication views """

from flask import jsonify, request, render_template, url_for, redirect, session
from api.v1.views import app_v1
from models.db import DBManager
from models.users import User
from flask import flash
from werkzeug.security import check_password_hash, generate_password_hash

db = DBManager()


@app_v1.route('/login', methods=['GET', 'POST'], strict_slashes=False)
def login():
    """ login """
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        data = db.get()
        error = None
        user = db.execute(
            'SELECT * FROM user WHERE username = ?', (username,)
        ).fetchone()

        if user is None:
            error = 'Incorrect username.'
        elif not check_password_hash(user['password'], password):
            error = 'Incorrect password.'

        if error is None:
            session.clear()
            session['user_id'] = user['id']
            return redirect(url_for('index'))

    return render_template('auth/login.html')


@app_v1.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        data = db.get()
        error = None

        if not email:
            error = 'email is required.'
        elif not password:
            error = 'Password is required.'

        if error is None:
            try:
                db.execute(
                    "INSERT INTO user (email, password) VALUES (?, ?)",
                    (email, generate_password_hash(password)),
                )
                db.commit()
            except db.IntegrityError:
                error = f"User {email} is already registered."
            else:
                return redirect(url_for("auth.login"))

        flash(error)

    return render_template('auth/register.html')
