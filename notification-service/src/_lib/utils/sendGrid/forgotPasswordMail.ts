import sendGridMail from "@sendgrid/mail";
import { config } from "dotenv";

config();

let sendgridAPI = String(process.env.SEND_GRID_API_KEY);

sendGridMail.setApiKey(sendgridAPI);

export const forgotPasswordMail = async (data: {
	email: string;
	url: string;
}) => {


	console.log(data.email);
	console.log(data.url);
	
    
	let sendgridEmail = String(process.env.SEND_GRID_EMAIL);
	const message = {
		to: data.email,
		from: {
			name: "EduVerse Learning",
			email: sendgridEmail,
		},
		subject: "EduVerse Forgot Password",
		text: "Please use this link to change your password",
		html: `<h2>Use this button to change your password </h2>
                <h4>This link will expire after 15 minutes</h4>
                <a href="${data.url}">Reset password</a>`,
	};

	try {
		await sendGridMail.send(message);
	} catch (error: any) {
		throw new Error(error.message || "send grid mail issue!");
	}
};
