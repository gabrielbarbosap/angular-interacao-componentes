import { Server } from './server/server'
import { usersRouters } from './controler/users/users.router'

const server = new Server()
server.bootstrap([usersRouters]).then(server => {
    console.log('Server is listening: ', server.application.address())
}).catch(error=>{
    console.log('Failed')
    console.error(error)
    process.exit(1)
})

