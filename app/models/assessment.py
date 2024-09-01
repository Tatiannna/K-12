from .db import db, environment, SCHEMA, add_prefix_for_prod
from models.user import User

class Assessment(db.Model):

    __tablename__ = 'assessments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), nullable=False)
    grade = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    user = db.relationship('User', backref=db.backref('posts', lazy=True))


    def to_dict(self):
        return {
            'id': self.id,
            'subject': self.subject,
            'grade': self.grade
        }