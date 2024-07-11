import server from './presentation/server'

(async () => {
    try {
      server.start();

      // hell

    } catch (error: any) {
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})()