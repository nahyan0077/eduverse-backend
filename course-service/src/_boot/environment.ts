import { config } from "dotenv";
config();

export const envString = (variable: string, defaultValue?: string): string => {
	const value = process.env[variable] || defaultValue;

	if (!value) {
		throw new TypeError(`
        Required environment variable ${variable} is undefined and has no default
        `);
	}
	return value;
};

export const envNumber = (variable: string, defaultValue: number): number => {
	const value = Number(process.env[variable]) || defaultValue;

	if (!value) {
		throw new TypeError(
			`Required environment variable ${variable} is undefined and has no default`
		);
	}
	return value;
};
