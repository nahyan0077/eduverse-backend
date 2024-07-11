import sendGridMail from '@sendgrid/mail';
import { config } from 'dotenv';

config();

const sendgridAPI = String(process.env.SEND_GRID_API_KEY);

sendGridMail.setApiKey(sendgridAPI);

export const accountVerificationMail = async (
    data: {
        email: string;
        otp: string;
    }
) => {
    const { email, otp } = data;
    const senderEmail = String(process.env.SEND_GRID_EMAIL);

    const message = {
        to: email,
        from: {
            name: 'EduVerse Learning',
            email: senderEmail,
        },
        subject: 'EduVerse Account Verification',
        text: `Dear User,\n\nPlease verify your account with this OTP: ${otp}\n\nBest regards,\nEduVerse Team`,
        html: `<p>Dear User,</p><p>Please verify your account with this OTP:</p><h2>${otp}</h2><p>Best regards,<br/>EduVerse Team</p>`,
    };

    try {
        await sendGridMail.send(message);
    } catch (error: any) {
        throw new Error(error.message || 'Failed to send account verification email.');
    }
};
