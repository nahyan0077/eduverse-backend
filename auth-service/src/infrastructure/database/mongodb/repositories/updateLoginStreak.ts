import { User } from "../models";

export const updateLoginStreak = async (userId: string) => {
	try {
		const user = await User.findById(userId);

		if (user) {
			const currentDate: any = new Date();
			const lastLoginData: any = new Date(user?.lastLoginDate || currentDate);
			const diffInDays = Math.floor(
				(currentDate - lastLoginData) / (1000 * 60 * 60 * 24)
			);
            const dayOfWeek = currentDate.getDay()

            console.log(dayOfWeek,"days of week------->");
            
			if (diffInDays == 1) {
				user.loginStreak += 1;
			} else if (diffInDays > 1 || diffInDays == 0 ) {
				user.loginStreak = 1;
			}

            //for reseting streak
            if (dayOfWeek === 0) {
                user.weeklyLogins = [false, false, false, false, false, false, false];
            }

            user.weeklyLogins[dayOfWeek - 1] = true
			user.lastLoginDate = currentDate;

			console.log(user.lastLoginDate, "lasst logind stat");

			console.log(user, "update streak");
			await user.save();
		} else {
			throw new Error("User not found while login");
		}
	} catch (error: any) {
		console.log(error?.message);
	}
};
