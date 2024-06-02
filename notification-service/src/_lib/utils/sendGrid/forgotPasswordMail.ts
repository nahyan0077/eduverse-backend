import sendGridMail from "@sendgrid/mail";
import { config } from "dotenv";

config();

const sendgridAPI = String(process.env.SEND_GRID_API_KEY);

sendGridMail.setApiKey(sendgridAPI);

export const forgotPasswordMail = async (data: {
	email: string;
	url: string;
}) => {
	const { email, url } = data;

	const senderEmail = String(process.env.SEND_GRID_EMAIL);

	const message = {
		to: email,
		from: {
			name: "EduVerse Learning",
			email: senderEmail,
		},
		subject: "Reset Your Password - EduVerse",
		text: `Dear User,

You've requested to reset your password on EduVerse. Please click the link below to reset your password. This link will expire after 15 minutes:

${url}

If you didn't request this, you can ignore this email.

Best regards,
EduVerse Team`,
		html: `<p>Dear User,</p>

<p>You've requested to reset your password on EduVerse. Please click the button below to reset your password. This link will expire after 15 minutes:</p>

<a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none;">Reset Password</a>

<p>If you didn't request this, you can ignore this email.</p>

<p>Best regards,<br/>EduVerse Team</p>`,
	};

	try {
		await sendGridMail.send(message);
	} catch (error: any) {
		throw new Error(error.message || "Failed to send forgot password email.");
	}
};
