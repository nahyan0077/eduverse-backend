import forgotPasswordConsumer from "./consumer/forgotPasswordConsumer";
import userCreatedConsumer from "./consumer/userCreatedConsumer";


interface ISubscriber {
    userCreated(data: any): Promise<void>;
    forgetPassword(data: any): Promise<void>
}

export interface INotificationSubscriber extends Pick<ISubscriber, 'userCreated' | 'forgetPassword'  > { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        forgetPassword: forgotPasswordConsumer
    }
}