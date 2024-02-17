from flask import Flask, render_template, request, session, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy.sql import func
from os import path
import os
import math
from flask_login import login_user, logout_user, login_required, current_user, LoginManager, UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

import requests
import json
from flask_mail import Mail
from thirdweb import ThirdwebSDK

with open('config.json', 'r') as c:
    params = json.load(c)["params"]




sdk = ThirdwebSDK.from_private_key(str(params['Private_Key']), "mumbai")

contract = sdk.get_contract(str(params['Contract_Address']))

app=Flask(__name__)
db = SQLAlchemy()

    
app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT='587',
    MAIL_USE_SSL=False,
    MAIL_USE_TLS=True,
    MAIL_USERNAME=params['gmail-user'],
    MAIL_PASSWORD=params['gmail-password'])

mail=Mail(app)


class Users(db.Model,UserMixin):
          id= db.Column(db.Integer, primary_key=True,autoincrement=True)
          email=db.Column(db.String(150), unique=True)
          name=db.Column(db.String(150))
          password=db.Column(db.String(150))
          dob = db.Column(db.String())

def create_database():
    if not path.exists(DB_NAME):
        with app.app_context():
            db.create_all()


DB_NAME = "database.db"
app.config["SECRET_KEY"] = "helloworld"
app.config["SQLALCHEMY_DATABASE_URI"] = f'sqlite:///{DB_NAME}'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
create_database()



login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(id):
    return Users.query.get(int(id))


@app.route('/')
def index():
        return render_template('index.html')


@app.route('/login', methods=["GET","POST"])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = Users.query.filter_by(email=email).first()
        if user:
            if user.password == password:
                login_user(user, remember=True)
                return redirect("/createfir")
        else:
            return redirect("/login")
    return render_template('login.html')



@app.route('/signup', methods=["GET","POST"])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password =request.form['password']
        name = request.form['legal-name']
        dob =  request.form['date-of-birth']
        new_user= Users(email=str(email), name=str(name), dob=str(dob), password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect("/login")
    elif current_user.is_authenticated :
                    return redirect("/createfir")
    return render_template('signup.html')


@app.route('/createfir', methods=["GET","POST"])
def createfir():   
    
    return "Create FIR"


@app.route('/logout')
def logout():
    logout_user()
    return redirect("/")

@app.route('/about')
def about():
    return render_template('aboutus.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/allfir')
def allfir():
    return "All FIR"


app.run(debug=True)
