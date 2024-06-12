import server from './presentation/server'
import database from './_boot/database';
import { startConsumer } from './_boot/consumer';

(async () => {
    try {
      server.start();
      
      // ,startConsumer()
      await Promise.all([database()])
    } catch (error: any) {
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})()