from .db import db, environment, SCHEMA, add_prefix_for_prod

class Assessment(db.Model):

    __tablename__ = 'assessments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(255), nullable=False)
    grade = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'subject': self.subject,
            'grade': self.grade
        }