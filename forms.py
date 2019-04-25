from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, TextAreaField


class AppointmentForm(FlaskForm):
    name = StringField('Name')
    email = StringField('Email')
    mobile_number = StringField('Số điện thoại')
    note = TextAreaField()
    submit = SubmitField('Đăng ký tư vấn')


class ContactForm(FlaskForm):
    name = StringField('Name')
    email = StringField('Email')
    phone_number = StringField('Phone number')
    service = SelectField()
    note = StringField('Note')
    submit = SubmitField('Submit')
