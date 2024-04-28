import nodemailer from 'nodemailer';


const sendEmail = async (subject: string, htmlMessage: string, emailTo: string = "programmerdatch@gmail.com"): Promise<void> => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_FROM_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: emailTo,
        subject: subject,
        html: htmlMessage,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('-----Email sent successfully-----');
    } catch (error) {
        // console.error('Error sending email:', error);
    }
}

export default sendEmail