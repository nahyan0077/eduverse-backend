import { updateUserConsumer } from "./consumer"


export interface ISubscriber {
    updateUser: (data: any) => Promise <void>
}

export interface IUserSubscriber extends Pick<
    ISubscriber, 'updateUser'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        updateUser: updateUserConsumer
    }
}