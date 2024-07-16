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
        const currentDayOfWeek = currentDate.getUTCDay();
        const lastLoginDayOfWeek = lastLoginDate.getUTCDay();

        // Check if it's a new week
        const isNewWeek = currentDayOfWeek < lastLoginDayOfWeek || diffInDays >= 7;

        if (isNewWeek) {
            // Reset weekly logins for a new week
            user.weeklyLogins = [false, false, false, false, false, false, false];
            user.loginStreak = 1; // Reset streak for a new week
        } else if (diffInDays === 1) {
            // Consecutive day login
            user.loginStreak += 1;
        } else if (diffInDays > 1) {
            // Non-consecutive login, but within the same week
            user.loginStreak = 1;
        }
        // If diffInDays is 0, it's a same-day login, so we don't change the streak

        // Mark the current day as logged in
        user.weeklyLogins[currentDayOfWeek + 1] = true;

        console.log(currentDayOfWeek,"current day of week");
        

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