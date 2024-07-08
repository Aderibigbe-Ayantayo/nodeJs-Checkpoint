const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fadeelayantayo@gmail.com',
        pass: ''
    }
});

const mailOptions = {
    from : 'fadeelayantayo@gmail.com',
    to : 'adex_fadeel@ymail.com',
    subject : 'Congratulations Always Fadeel',
    text : 'Node.js checkpoint to submit link via your Github account'
}

transporter.sendMail(mailOptions, function (error, info){
    if(error){
         console.log(error);
    }else{

console.log('Email sent: ' + info.response)
    }
});