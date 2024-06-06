const bcrypt = require("bcrypt");

export const hashPassword = async (password: string) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		if (!hashedPassword) {
			throw new Error("Password hashing error!");
		}

		return hashedPassword;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
