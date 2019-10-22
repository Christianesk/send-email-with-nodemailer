const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/send-email', async (req, res) => {

    const { name, email, phone, message } = req.body;

    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'mail.example.com',
        name: 'example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'info@example.com',
            pass: 'example123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Example App" <info@example.com>',
        to: email,
        subject: 'Example App Information',
        html: contentHTML
    });

    console.log(info);
    console.log('Message sent', info.messageId)

    res.redirect('/success.html');
});


module.exports = router;