const express = require("express");
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

router.use(cors())

router.post('/api/contactForm', (req, res) => {
    const inputData = req.body;
    console.log(inputData);
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${inputData.inputName}</li>
            <li>Email: ${inputData.inputEmail}</li>
        </ul>
        <h3>Message</h3>
        <p>${inputData.inputMessage}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtpout.secureserver.net',
            port: 465,
            secure: true,
            secureConnection: false,
            tls: {
                ciphers: 'SSLv3',
                // rejectUnauthorized: false
            },
            requireTLS: true,
            debug: true,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS
            }
        })
        console.log(transporter.options.auth.user);
        let mailOptions = {
            from: transporter.options.auth.user,
            to: transporter.options.auth.user,
            replyTo: inputData.inputEmail,
            subject: 'New Contact from Beyondvs Website',
            text: inputData.inputMessage,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })

    if (inputData) {
        // res.status(200).json({ success: "infoData submitted!" });
        res.json(inputData);
    }
    else {
        res.status(400).json({ error: "infoData not submitted!" });
    }
})

module.exports = router;