import flask
from flask_login import UserMixin
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy
from os import path
app = flask.Flask(__name__)

DB_NAME="database.db"
db=SQLAlchemy()
class Users(db.Model, UserMixin):
          id= db.Column(db.Integer, primary_key=True,autoincrement=True)
          email=db.Column(db.String(150), unique=True)
          name=db.Column(db.String(150))
          password=db.Column(db.String(150))
          dob = db.Column(db.Date())
          date_created=db.Column(db.DateTime(timezone=True), default=func.now())


app.config["SECRET_KEY"]="helloworld"
app.config["SQLALCHEMY_DATABASE_URI"]= f'sqlite:///{DB_NAME}'
db.init_app(app)

def create_database(app):
          if not path.exists("website/"+ DB_NAME):
                    db.create_all()


create_database(app)





@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if flask.request.method == 'POST':
        return flask.redirect(flask.url_for('index'))
    return flask.render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def register():
    if flask.request.method == 'POST':
        email = flask.request.form['email']
        password = flask.request.form['password']
        name = flask.request.form['legal-name']
        dob =   flask.request.form['date-of-birth']

        new_user= Users(email=email, name=name, dob=dob, password=generate_password_hash(password, method='sha256'))
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user, remember=True)
        return redirect("/")
    elif current_user.is_authenticated :
                    return redirect("/")

    return flask.render_template('signup.html')


@app.route("/check_email", methods=["GET","POST"])
def check_email():

          if request.method=="POST":
                    get_json=request.get_json("params")
                    email=get_json['email'].lower()
                    email_exist=Users.query.filter_by(email=email).first()
                    if email_exist:
                              return "yes"
                    else:
                              return "no"
                    
          else:
                    return redirect("/")




if __name__ == '__main__':
    app.run(debug=True)
