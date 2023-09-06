const Server = require("./server/Server");
const { server } = require("./config/main.settings");

main = () => {
    try {
        let serverEngine = new Server(server.port);
        serverEngine.start();

    } catch (e) {
        helper.logger(e)
        process.exit(1);
    }
};

main();
