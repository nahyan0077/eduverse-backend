import { User } from "../models";

export const updateLoginStreak = async (userId: string) => {
    const session = await User.startSession();
    session.startTransaction();

    try {
        const user = await User.findById(userId).session(session);

        if (!user) {
            throw new Error("User not found while logging in");
        }

        const currentDate = new Date();
        currentDate.setUTCHours(0, 0, 0, 0);

        const lastLoginDate = user.lastLoginDate ? new Date(user.lastLoginDate) : currentDate;
        lastLoginDate.setUTCHours(0, 0, 0, 0);

        const diffInDays = Math.floor((currentDate.getTime() - lastLoginDate.getTime()) / (1000 * 60 * 60 * 24));
        const dayOfWeek = currentDate.getUTCDay();

        if (diffInDays === 1) {
            user.loginStreak += 1;
        } else if (diffInDays > 1) {
            user.loginStreak = 1;
        }
        // If diffInDays is 0, it's a same-day login, so we don't change the streak

        // Resetting weekly logins on Sunday (0) or if it's been more than a week
        if (dayOfWeek === 0 || diffInDays >= 7) {
            user.weeklyLogins = [false, false, false, false, false, false, false];
        }

        // Mark the current day as logged in
        user.weeklyLogins[dayOfWeek] = true;

        user.lastLoginDate = currentDate;

        await user.save({ session });
        await session.commitTransaction();
    } catch (error: any) {
        await session.abortTransaction();
        console.error("Error updating login streak:", error.message);
        throw error; 
    } finally {
        session.endSession();
    }
};