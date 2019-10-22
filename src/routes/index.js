const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/send-email', async (req, res) => {

    const { name, email, phone, message } = req.body;

    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>User phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'mail.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'info@example.com',
            pass: 'prueba123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Example" <info@example.com>',
        to: 'example@hotmail.com',
        subject: 'Example Information',
        text: 'Hello Word'
    });

    console.log(info);
    console.log('Message sent', info.messageId)

    res.redirect('/success.html');
});


module.exports = router;