from flask import render_template, Flask, redirect, url_for, request
from forms import AppointmentForm, ContactForm
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hellodsadasda'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
mail = Mail(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    appointment_form = AppointmentForm()
    contact_form = ContactForm()
    if appointment_form.validate_on_submit():
        text = 'Name: ' + appointment_form.name.data + ', Email: ' + appointment_form.email.data + ', From: ' + request.form.get(
            'from_country') + '. To: ' + request.form.get(
            'to_country') + ', Address: ' + appointment_form.address.data + ', Purpose:' + request.form.get(
            'purpose') + ', Note:' + appointment_form.note.data
        msg = Message(text, sender='PV Network Customer', recipients=['vuhoang17891@gmail.com'])
        mail.send(msg)
        print(text)
        return redirect(url_for('index'))
    return render_template('index.html', appointment_form=appointment_form, contact_form=contact_form)
