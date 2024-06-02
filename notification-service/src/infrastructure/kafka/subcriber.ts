// import forgotPasswordConsumer from "./consumer/forgotPasswordConsumer";
// import instructorVerificationConsumer from "./consumer/instructorVerificationConsumer";
// import userCreatedConsumer from "./consumer/userCreatedConsumer";


// interface ISubscriber {
//     userCreated(data: any): Promise<void>;
//     forgotPassword(data: any): Promise<void>
//     verifyInstructorMail(data: any): Promise <void>
// }

// export interface INotificationSubscriber extends Pick<ISubscriber, 'userCreated' | 'forgotPassword' | 'verifyInstructorMail' > { }

// export const createSubscriber = (): INotificationSubscriber => {
//     return {
//         userCreated: userCreatedConsumer,
//         forgotPassword: forgotPasswordConsumer,
//         verifyInstructorMail: instructorVerificationConsumer
//     }
// }