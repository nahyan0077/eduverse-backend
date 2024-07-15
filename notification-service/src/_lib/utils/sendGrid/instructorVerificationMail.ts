import sendGridMail from "@sendgrid/mail";
import { config } from "dotenv";

config();

const sendgridAPI = String(process.env.SEND_GRID_API_KEY);

const website = String(process.env.CLIENT_URL)

sendGridMail.setApiKey(sendgridAPI);

export const instructorVerificationMail = async (data: { email: string }) => {
	const sendgridEmail = String(process.env.SEND_GRID_EMAIL);
	const message = {
		to: data.email,
		from: {
			name: "EduVerse Learning",
			email: sendgridEmail,
		},
		subject: "EduVerse Instructor Account Verification",
		text: `Dear Instructor,

Your account has been successfully verified. Thank you for being a valuable part of EduVerse.

To get started, please click on the link below to visit EduVerse:
https://drop-ship.shop

Best regards,
The EduVerse Team`,
		html: `
            <h2>Dear Instructor,</h2>
            <p>Your account has been successfully verified. Thank you for being a valuable part of EduVerse.</p>
            <p>To get started, please click on the link below to visit EduVerse:</p>
            <a href=${website} target="_blank">https://www.eduverse.com</a>
            <p>Best regards,<br>The EduVerse Team</p>
        `,
	};

	try {
		await sendGridMail.send(message);
	} catch (error: any) {
		throw new Error(error.message || "SendGrid mail issue!");
	}
};
