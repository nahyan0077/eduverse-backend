import app from "./presentation/server";
import database from "./_boot/database";
import { socket } from "./_boot/socket";
import { createServer } from "http";
import { startConsumer } from './_boot/consumer';


(async () => {
	try {
		const server = createServer(app);

		socket(server);

		
		await Promise.all([database(),startConsumer()])

		server.listen(process.env.PORT, () => {
			console.log(
				`The ${process.env.SERVICE} is listening on port ${process.env.PORT}`
			);
		});
	} catch (error: any) {
		console.error(error?.message || "An error occurred");
		process.exit(1);
	}
})();
