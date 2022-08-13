const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema


const Room = new Schema({
    title: {type: String},
    name: {type: String},
    description: {type: String},
    price:{type: Number},
    maxPeople:{type: Number},
    roomNumbers:[{number:Number, unavailableDates:[{type:Date}]}],
    slug: { type: String, slug: 'city_name', unique: true },
  
  },{timestamps: true,});


  //ADD PLUGIN
mongoose.plugin(slug);
Room.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' });

module.exports = mongoose.model('Room', Room)