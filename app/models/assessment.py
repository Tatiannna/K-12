from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from datetime import datetime

class Assessment(db.Model):

    __tablename__ = 'assessments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    now = datetime.utcnow()
    formatted_date = now.strftime('%Y-%m-%d %H:%M:%S.%f')


    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), nullable=False)
    grade_level = db.Column(db.Integer, nullable=False)
    score = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date_taken = db.Column(db.String(255), default=formatted_date, nullable=False)

    user = db.relationship('User', backref=db.backref('assessments', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'subject': self.subject,
            'grade_level': self.grade_level,
            'user_id': self.user_id,
            'score': self.score,
            'date_taken': self.date_taken
        }