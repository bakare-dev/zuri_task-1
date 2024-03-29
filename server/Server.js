"use strict";

const express = require("express");

/* routes */
const routes = require("./routes/route")

let instance;
class Server {
    #app;
    #port;

    constructor(port) {
        if (instance) return instance;

        this.#port = port;
        this.#configure();
        this.#buildRoutes();

        instance = this;
    }

    #configure = () => {
        this.#app = express();
        this.#app.use(express.json({ limit: "50mb" }));

        this.#app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT");
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Content-Type, Authorization, source, auth_mode"
            );
            res.setHeader("Access-Control-Allow-Credentials", "true");

            if (req.method === "OPTIONS") {
                return res.sendStatus(200);
            }
            next();
        });
    };

    #buildRoutes = () => {
        this.#app.use("/", routes);
    };

    start = () => {
        this.#app.listen(this.#port, () => {
        console.log("zuri task 1 server is up at port " + this.#port);
        });
    };
}

module.exports = Server;
