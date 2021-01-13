import { Router } from '../../common/router'
import * as restify from 'restify'
import { User } from './user.model'


class UsersRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/users', (req, resp, next) => {
      User.find().then(users => {
        resp.json(users)
        return next()
      })
    })

    application.get('/users/:id', (req, resp, next) => {
      User.findById(req.params.id).then(users => {
        resp.json(users)
        return next()
      })
    })

    application.post('/users', (req, resp, next) => {
      let user = new User(req.body)
      user.save().then(user => {
        resp.json(user)
        return next()
      })
    })

    application.put('/users/:id', (req, resp, next) => {
      const options = { overwrite: true }
      User.update({ _id: req.params.id }, req.body, options).exec().then(res => {
        if (res.n) {
          return User.findById(req.params.id)
        } else {
          resp.json({ message: '400' })
        }
      }).then(user => {
        resp.json(user)
        return next()
      })
    })

    application.del('/users/:id', (req, resp, next) => {
      User.remove({ _id: req.params.id }).exec().then((cmdResult: any) => {
        if (cmdResult.result.n) {
          resp.json({ message: '204' })
        } else {
          resp.json({ message: '400' })
        }
        return next()
      })
    })
  }
}


export const usersRouters = new UsersRouter()