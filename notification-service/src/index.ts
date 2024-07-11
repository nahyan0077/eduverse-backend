import { startConsumer } from "./_boot/consumer";
import server from "./presentation/server";

//test
(async () => {
	try {
		server.start();
		await startConsumer()
	} catch (error: any) {
		console.error(error?.message || "An error occurred");
		process.exit(1);
	}
})();
