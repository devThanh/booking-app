
const hotelRouter = require('./hotel')
const authRouter = require('./auth')
const userRouter = require('./user')
const roomRouter = require('./room')
const siteRouter = require('./site')
const loginRouter = require('./login')
const adminRouter = require('./admin')


function route(app){

      app.use('/hotel', hotelRouter)
      app.use('/auth', authRouter)
      app.use('/user', userRouter)
      app.use('/room', roomRouter)
      app.use('/user', loginRouter)
      app.use('/admin', adminRouter)
      app.use('/', siteRouter)




}

module.exports = route;