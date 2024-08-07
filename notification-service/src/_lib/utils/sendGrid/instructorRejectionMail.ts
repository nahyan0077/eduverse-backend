import sendGridMail from "@sendgrid/mail";
import { config } from "dotenv";

config();

const sendgridAPI = String(process.env.SEND_GRID_API_KEY);

sendGridMail.setApiKey(sendgridAPI);

export const instructorRejectionMail = async (data: { email: string }) => {
	const sendgridEmail = String(process.env.SEND_GRID_EMAIL);
	const message = {
		to: data.email,
		from: {
			name: "EduVerse Learning",
			email: sendgridEmail,
		},
		subject: "EduVerse Instructor Application Update",
		text: `Dear Instructor,

We regret to inform you that your application to become an instructor with EduVerse has not been approved at this time. 

Your application has been rejected because the data provided in your CV does not match our instructor application criteria.

We appreciate your interest in joining our team and encourage you to visit our site and apply again in the future.

Best regards,
The EduVerse Team
[EduVerse Website](https://drop-ship.shop)`,
		html: `
            <h2>Dear Instructor,</h2>
            <p>We regret to inform you that your application to become an instructor with EduVerse has not been approved at this time.</p>
            <p>Your application has been rejected because the data provided in your CV does not match our instructor application criteria.</p>
            <p>We appreciate your interest in joining our team and encourage you to visit our site and apply again in the future.</p>
            <p>Best regards,<br>The EduVerse Team</p>
            <p><a href="https://drop-ship.shop" style="color: #1a73e8;">Visit our website to apply again</a></p>
        `,
	};

	try {
		await sendGridMail.send(message);
	} catch (error: any) {
		throw new Error(error.message || "SendGrid mail issue!");
	}
};
