import sendGridMail from '@sendgrid/mail'

let sendgridAPI = String(process.env.SEND_GRID_API_KEY)
sendGridMail.setApiKey(sendgridAPI)

export const accountVerificationMail = async (
    data: {
        email: string,
        otp: string
    }
) => {
    let sendgridEmail = String(process.env.SEND_GRID_EMAIL)
    const message = {
        to: data.email,
        from: {
            name: "EduVerse Learning",
            email: sendgridEmail
        },
        subject: "EduVerse account verification",
        text: "Please verify your account with this OTP",
        html: `<h2>Your OTP : ${data.otp}</h2>`
    };

    try {
         await sendGridMail.send(message)   
    } catch (error: any) {
        throw new Error(error.message || "send grid mail issue!");
    }
}