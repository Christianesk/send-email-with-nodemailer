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
        host: 'mail.sptsoporte.com',
        port: 587,
        secure: false,
        auth: {
            user: 'info@sptsoporte.com',
            pass: 'prueba123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Martial App" <info@sptsoporte.com>',
        to: 'christian.91.gm@hotmail.com',
        subject: 'Martial App Information',
        text: 'Hello Word'
    });

    console.log(info);
    console.log('Message sent', info.messageId)

    res.redirect('/success.html');
});


module.exports = router;