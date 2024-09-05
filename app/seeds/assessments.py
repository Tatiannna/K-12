from app.models import db, Assessment, User, environment, SCHEMA
from sqlalchemy.sql import text


def seed_assessments(users):

    assessment1 = Assessment(
        subject='Mathematics', 
        score=100, 
        user_id= users[0].id,
        grade_level = 8 ) 

    assessment2 = Assessment(
        subject='Reading', 
        score=40, 
        user_id= users[0].id,
        grade_level = 8 )

    assessment3 = Assessment(
        subject='Mathematics', 
        score=90,
        user_id= users[0].id,
        grade_level = 8 )

    assessment4 = Assessment(
        subject='Reading', 
        score=10, 
        user_id= users[0].id,
        grade_level = 8)

    assessment5 = Assessment(
        subject='Mathematics', 
        score=0, 
        user_id=users[1].id, 
        grade_level = 3)

    assessment6 = Assessment(
        subject='Reading', 
        score=70, 
        user_id=users[1].id,
        grade_level = 3 )

    assessment7 = Assessment(
        subject='Mathematics', 
        score=50, 
        user_id= users[1].id,
        grade_level = 3)

    assessment8 = Assessment(
        subject='Reading', 
        score=100, 
        user_id= users[2].id,
        grade_level = 12)

    assessment9 = Assessment(
        subject='Mathematics', 
        score=90, 
        user_id= users[2].id,
        grade_level = 12)

    assessment10 = Assessment(
        subject='Mathematics', 
        score=20, 
        user_id= users[2].id,
        grade_level = 12)

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


def undo_assessments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.assessments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM assessments"))
        
    db.session.commit()