const User = require('../models/User')

class UserController{

    // //Create
    // async create (req, res, next){
    //     const newHotel = new Hotel(req.body)
    //     try{
    //         const savedHotel = await newHotel.save()
    //         res.status(200).json(savedHotel)
    //     }
    //     catch(err){
    //         next(err)
    //     }

    // }

    //Update
    async update (req, res, next){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
            res.status(200).json(updatedUser)
        }
        catch(err){
            next(err)
        }

    }


    //Delete
    async delete (req, res, next){
        try{
            const deletedUser = await User.delete({id: req.params.id})
            res.status(200).json("User has been soft deleted")
        }
        catch(err){
            next(err)
        }

    }

    //Restore
    async restore (req, res, next){
        try{
            const deletedUser = await User.restore({id: req.params.id})
            res.status(200).json("User has been restored")
        }
        catch(err){
            next(err)
        }

    }

    //Delete
    async deleteForce (req, res, next){
        try{
            const deletedUser = await User.deleteOne({id: req.params.id})
            res.status(200).json("User has been deleted")
        }
        catch(err){
            next(err)
        }

    }


    //Get
    async get (req, res, next){
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        }
        catch(err){
            next(err)
        }

    }



    //Get All
    async getAll (req, res, next){
        try{
            const users = await User.find()
            res.status(200).json(users)
        }
        catch(err){
            next(err)
        }

    }

}

module.exports = new UserController()