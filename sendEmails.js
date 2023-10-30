var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gbolahandavid58@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'gbolahandavid58@gmail.com',
  to: 'davidomogbolahan94@gmail.com',
  subject: 'Sending Email using Node.js from David',
  text: 'I am a student of gomycode!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});