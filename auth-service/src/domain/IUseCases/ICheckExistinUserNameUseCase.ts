export interface ICheckExistingUserNameUseCase {
    execute(username: string): Promise < boolean | null >
}