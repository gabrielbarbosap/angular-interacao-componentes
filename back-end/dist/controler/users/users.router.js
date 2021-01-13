"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouters = void 0;
const router_1 = require("../../common/router");
const user_model_1 = require("./user.model");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, resp, next) => {
            user_model_1.User.find().then(users => {
                resp.json(users);
                return next();
            });
        });
        application.get('/users/:id', (req, resp, next) => {
            user_model_1.User.findById(req.params.id).then(users => {
                resp.json(users);
                return next();
            });
        });
        application.post('/users', (req, resp, next) => {
            let user = new user_model_1.User(req.body);
            user.save().then(user => {
                resp.json(user);
                return next();
            });
        });
        application.put('/users/:id', (req, resp, next) => {
            const options = { overwrite: true };
            user_model_1.User.update({ _id: req.params.id }, req.body, options).exec().then(res => {
                if (res.n) {
                    return user_model_1.User.findById(req.params.id);
                }
                else {
                    resp.json({ message: '400' });
                }
            }).then(user => {
                resp.json(user);
                return next();
            });
        });
        application.del('/users/:id', (req, resp, next) => {
            user_model_1.User.remove({ _id: req.params.id }).exec().then((cmdResult) => {
                if (cmdResult.result.n) {
                    resp.json({ message: '204' });
                }
                else {
                    resp.json({ message: '400' });
                }
                return next();
            });
        });
    }
}
exports.usersRouters = new UsersRouter();
