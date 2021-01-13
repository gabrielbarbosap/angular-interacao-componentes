"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const restify = require("restify");
const mongoose = require("mongoose");
const env_1 = require("../common/env");
const cors = require("cors");
class Server {
    initializeDb() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(env_1.enviroment.db.url, {
            useMongoClient: true
        });
    }
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'api',
                    version: '1.0.0'
                });
                this.application.pre(cors());
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                //routes
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                this.application.listen(env_1.enviroment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap(routers = []) {
        return this.initializeDb().then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;
