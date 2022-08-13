const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema


const Hotel = new Schema({

    name: {type: String},
    type: {type: String},
    city: {type: String},
    description: {type: String},
    title: {type: String},
    address: {type:String},
    distance: {type:String},
    photos: {
      type: [String]
    },
    price:{type: Number},
    rating: {
      type: Number,
      min:0,
      max:5
    },
    room: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
    slug: { type: String, slug: 'city'},
  
  },{timestamps: true,});


  //ADD PLUGIN
mongoose.plugin(slug);
Hotel.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' });

module.exports = mongoose.model('Hotel', Hotel)