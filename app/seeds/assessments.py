from app.models import db, Assessment, environment, SCHEMA
from sqlalchemy.sql import text


def seed_users():
    assessment1 = Assessment(
        subject='Mathematics', grade=100, user_id= 1)
    assessment2 = Assessment(
        subject='Reading', grade=40, user_id= 1)
    assessment3 = Assessment(
        subject='Mathematics', grade=90, user_id= 1)
    assessment4 = Assessment(
        subject='Reading', grade=10, user_id= 1)
    assessment5 = Assessment(
        subject='Mathematics', grade=0, user_id= 2)
    assessment6 = Assessment(
        subject='Reading', grade=70, user_id= 2)
    assessment7 = Assessment(
        subject='Mathematics', grade=50, user_id= 2)
    assessment8 = Assessment(
        subject='Reading', grade=100, user_id= 3)
    assessment9 = Assessment(
        subject='Mathematics', grade=90, user_id= 3)
    assessment10 = Assessment(
        subject='Mathematics', grade=20, user_id= 3)

    db.session.add(assessment1)
    db.session.add(assessment2)
    db.session.add(assessment3)
    db.session.add(assessment4)
    db.session.add(assessment5)
    db.session.add(assessment6)
    db.session.add(assessment7)
    db.session.add(assessment8)
    db.session.add(assessment9)
    db.session.add(assessment10)

    db.session.commit()