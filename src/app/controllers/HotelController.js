const Hotel = require('../models/Hotel')
const Room = require('../models/Room')

const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose')
class HotelController{

    //Create
    async create (req, res, next){
        const newHotel = new Hotel(req.body)
        try{
            const savedHotel = await newHotel.save()
            res.status(200).redirect('back')
        }
        catch(err){
            next(err)
        }

    }

    //Update
    async update (req, res, next){
        try{
            const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
            res.status(200).json(updatedHotel)
        }
        catch(err){
            next(err)
        }

    }


    //Delete
    async delete (req, res, next){
        try{
            const deletedHotel = await Hotel.delete({id: req.params.id})
            res.status(200).json("Hotel has been soft deleted")
        }
        catch(err){
            next(err)
        }

    }

    //Restore
    async restore (req, res, next){
        try{
            const deletedHotel = await Hotel.restore({id: req.params.id})
            res.status(200).json("Hotel has been restored")
        }
        catch(err){
            next(err)
        }

    }

    //Delete
    async deleteForce (req, res, next){
        try{
            await Hotel.deleteOne({id: req.params.id})
            res.status(200).json("Hotel has been deleted")
        }
        catch(err){
            next(err)
        }

    }


    //Get
    get (req, res, next){
        Hotel.findOne({title:req.params.title})
            .populate('room')
                .then(hotel=>{
                    console.log(hotel.room)
                    hotel.room.forEach(function(each){
                        res.render('hotel/hotel-detail',{
                            room: mongooseToObject(each),
                            hotel: mongooseToObject(hotel)
                        })
                    })
                })
                .catch(next)
                


    }



    //Get All 
    getAll (req, res, next){
        Hotel.find({slug:req.params.slug})
        .then(hotel =>{
            res.render('hotel/hotel',{
                hotel: multipleMongooseToObject(hotel)})
        })
        .catch(next)

    }



 
    

}

module.exports = new HotelController()