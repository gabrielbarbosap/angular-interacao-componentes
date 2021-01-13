"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./controler/users/users.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.usersRouters]).then(server => {
    console.log('Server is listening: ', server.application.address());
}).catch(error => {
    console.log('Failed');
    console.error(error);
    process.exit(1);
});
