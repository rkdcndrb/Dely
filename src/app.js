import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import helmet from "helmet";
import logger from "morgan";

class App {
    app = express();
    constructor() {
        this.app = new ApolloServer({});

    }
    middlewares = () => {
        this.app.use(cors());
        this.app.use(logger("dev"));
        this.app.use(helmet());
    }
}

export default new App().app;