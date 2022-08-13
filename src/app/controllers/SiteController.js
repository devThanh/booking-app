const City = require('../models/City')
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose')


class SiteController{

    home(req, res, next){
        City.find({})
        .then(city =>{
            res.render('home',{
                city: multipleMongooseToObject(city)})
        })
        .catch(next)
        
    }


    login(req, res, next){
        res.render('login')
    }


    register(req, res, next){
        res.render('register')
    }
}

module.exports = new SiteController()