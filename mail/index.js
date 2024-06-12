const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.post('/send-email', async (req, res) => {
    const { fullName, email, phoneNumber, date, time, seats, notes } = req.body;
 
    try {
        const transporter = nodemailer.createTransport({
            host: 'hasimovtabriz.com.tr',
            port: 465,
            secure: true,
            auth: {
                user: 'admin@hasimovtabriz.com.tr',
                pass: '3865606rt.',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const info = await transporter.sendMail({
            from: 'Tabriz <admin@hasimovtabriz.com.tr>',
            to: `tebosh57@gmail.com`,
            subject: 'Hashimov Tabriz',
            html: `
            <div style="font-family: 'Arial', sans-serif; background-color: #f8f8f8; padding: 20px; text-align: center; ">
            <h1 style="color: #333; margin-bottom: 20px; font-size: 28px; font-weight: bold;">Istafdeciden gelen</h1>
            <div style="border: 2px solid #333; padding: 20px; background-color: #fff; border-radius: 10px;">
                <h2 style="color: #333; margin-bottom: 10px; font-size: 24px;">Ad: ${fullName}</h2>
                <h3 style="color: #333; margin-bottom: 10px; font-size: 20px;">E-post: ${email}</h3>
                <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Telefon: ${phoneNumber}</h4>
                <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Ustol sayi: ${seats}</h4>
                <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Mesaj: ${notes}</h4>
                <p style="color: #333; font-size: 20px; margin-top: 10px;">Vaxt: ${date} <span style="font-weight: bold; color: #007bff;">${time}</span></p>

                <img src="https://static.vecteezy.com/system/resources/previews/003/659/087/non_2x/t-white-alphabet-letter-black-circle-company-business-logo-icon-design-corporate-vector.jpg" alt="Foto" style="max-width: 100%; height: auto; margin-top: 20px; border-radius: 5px;">
            </div>
        </div>
        
            `,
        });

        console.log("Message sent: " + info.messageId);

        const info1 = await transporter.sendMail({
            from: 'Tabriz 57 <admin@hasimovtabriz.com.tr>',
            to: email,
            subject: 'Hashimov Tabriz',
            html: `
           <div style="font-family: 'Arial', sans-serif; background-color: #f8f8f8; padding: 20px; text-align: center; ">
            <h1 style="color: #333; margin-bottom: 20px; font-size: 28px; font-weight: bold;">Gonderilen E-posta</h1>
            <div style="border: 2px solid #333; padding: 20px; background-color: #fff; border-radius: 10px;">
                <h2 style="color: #333; margin-bottom: 10px; font-size: 24px;">Ad: ${fullName}</h2>
                <h3 style="color: #333; margin-bottom: 10px; font-size: 20px;">E-post: ${email}</h3>
                <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Telefon: ${phoneNumber}</h4>
                <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Ustol sayi: ${seats}</h4>
                <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Mesaj: ${notes}</h4>
                <p style="color: #333; font-size: 20px; margin-top: 10px;">Vaxt: ${date} <span style="font-weight: bold; color: #007bff;">${time}</span></p>

                </div>
        </div>
        
            `,
        });

        console.log("Message Sent: " + info1.messageId);

        res.send("E-posta gonderildi.");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
