var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
    res.render('contact', {
        title: 'Contact'
    });
});

// send email
router.post('/send', (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mailid',
            pass: 'password'
        }
    });

    var mailOptions = {
        from: 'from mailid',
        to: 'to mailid',
        subject: 'Hello from PC Repair',
        text: 'You have a submittion from... Name: ' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
        html: '<p>You have a submittion from...</p> <ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error)
            console.log(error);
        else
            console.log('Message Sent: ' + info.response);
        // res.redirect('/');
    });
});

module.exports = router;
