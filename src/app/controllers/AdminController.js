const City = require('../models/City')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose')



class CityController{
    //[GET]/
    show(req, res, next){
        City.find({})
            .then(city=>{
                res.render('home',{
                    city:multipleMongooseToObject(city),
                });
            })
            .catch(next);
    }




    //[GET] /admin/create
    create(req, res, next){
        res.render('admin/create')
    }


    //[POST] /admin/store
    store(req, res, next){
        const city = new City(req.body)
        city.save()
        //res.redirect('/')

    }

    //[GET] /admin/stored
    storedCity(req, res, next){
        Promise.all([City.find({}),  City.countDocumentsDeleted(),Hotel.find(), Hotel.findOne({slug:'da-nang'}).populate('room')])
            .then(([city, deletedCount,hotels, hotel]) =>{
                hotel.room.forEach(function(each){
                    res.render('admin/admin',{
                        city: multipleMongooseToObject(city),
                        deletedCount:deletedCount,
                        room: mongooseToObject(each),
                        hotels:multipleMongooseToObject(hotels),
                        hotel: mongooseToObject(hotel)
                    })
                })
                // res.render('admin/admin', {                   
                //     city: multipleMongooseToObject(city),
                //     deletedCount:deletedCount,
                //     hotel:mongooseToObject(hotel),
      
                // })    
                // console.log(hotel.room)
            }       
        )
        .catch(next)
    }


    editCity(req, res, next){
        City.findOne({_id:req.params.id})
        .then(city=>{
            res.render('admin/editCity',{
                city:mongooseToObject(city),
            });
        })
        .catch(next);
    }

    editHotel(req, res, next){
        Hotel.findOne({_id:req.params.id})
        .then(hotel=>{
            res.render('admin/editHotel',{
                hotel:mongooseToObject(hotel),
            });
        })
        .catch(next);
    }

    //[PUT]/:slug/edit
    update(req, res, next){
        City.updateOne({_id:req.params.id}, req.body)
        .then(()=>{
            res.redirect('/admin/admin');
        })
        .catch(next);
    }


    delete(req, res, next){
        City.delete({slug:req.params.slug})
        .then(res.redirect('back'))
        .catch(next);
    }

    //[GET] /admin/trash
    trashCity(req, res, next){
        Promise.all([City.findDeleted({}), Hotel.findDeleted({})])
        .then(([city, hotel]) =>{
            res.render('admin/trash-city',{
                city:multipleMongooseToObject(city),
                hotel:multipleMongooseToObject(hotel)
            })
        })
        .catch(next)
    }


    restore(req, res, next){
        City.restore({slug: req.params.slug})
        .then(() =>res.redirect('back'))
        .catch(next)
    }

    deleteForce(req, res, next){
        City.deleteOne({slug: req.params.slug})
        .then(() =>res.redirect('back'))
        .catch(next)
    }


    search(req, res, next){
        console.log(req.params.slug)
        res.send('HOTEL '+ req.params.slug)
    }
}
module.exports = new CityController();