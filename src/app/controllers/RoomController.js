const Room = require('../models/Room');
const Hotel = require('../models/Hotel');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');


  
  
  
  class RoomController{

    //CREATE ROOM
    async create(req, res, next){
      const hotelId = req.params.hotelid
      const newRoom = new Room(req.body)

      try{
        const saveRoom = await newRoom.save()
        try{
          await Hotel.findByIdAndUpdate(hotelId, {$push: {room: saveRoom._id}})
        }catch(err){
          next(err)
        }
        res.status(200).json(saveRoom)
      }catch(err){
        next(err)
      }
    }
     
    //Update
    async update (req, res, next){
      try{
          const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
          res.status(200).json(updatedRoom)
      }
      catch(err){
          next(err)
      }

  }


  //Delete
  async delete (req, res, next){
      try{
          const deletedRoom = await Room.delete({id: req.params.id})
          res.status(200).json("Room has been soft deleted")
      }
      catch(err){
          next(err)
      }

  }

  //Restore
  async restore (req, res, next){
      try{
          const deletedRoom = await Room.restore({id: req.params.id})
          res.status(200).json("Room has been restored")
      }
      catch(err){
          next(err)
      }

  }

  //Delete
  async deleteForce (req, res, next){
        const hotelId = req.params.hotelid
      try{
          await Room.deleteOne({id: req.params.id})
          try{
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {room: req.params.id}})
          }catch(err){
            next(err)
          }
          res.status(200).json("Room has been deleted")
      }
      catch(err){
          next(err)
      }

  }


  //Get
  async get (req, res, next){
      try{
          const room = await Room.findById(req.params.id)
          res.status(200).json(room)
      }
      catch(err){
          next(err)
      }

  }



  //Get All
  async getAll (req, res, next){
      try{
          const room  = awaitRoom.find()
          res.status(200).json(room )
      }
      catch(err){
          next(err)
      }

  }

  }

  module.exports = new RoomController()