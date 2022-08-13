const jwt = require('jsonwebtoken')
const { createError } = require('./error')
const {verifyToken} = require('./verifyToken')


module.exports = {
    verifyUser: function(req, res, next){
        verifyToken(req, res, ()=>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next()
            }else{
                
                return next(createError(403, 'You are not authorized!'))
            }
        })
    },

    verifyAdmin: function(req, res, next){
        verifyToken(req, res,  ()=>{
            if(req.user.isAdmin){
                //res.redirect('auth/admin')
                next()
            }else{
                return next(createError(403, 'You are not authorized!'))
            }
        })
    }
}