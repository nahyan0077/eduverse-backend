import userCreatedConsumer from "./consumer/userCreatedConsumer";

interface ISubscriber {
    userCreated(data: any): Promise<void>;
}

export interface INotificationSubscriber extends Pick<ISubscriber, 'userCreated'  > { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer
    }
}