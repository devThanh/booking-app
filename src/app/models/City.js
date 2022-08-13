const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
//const ObjectId = Schema.ObjectId;



const City = new Schema({
  name: {type: String},
  description: {type: String},
  admini_unit: {type: String},
  numbers: {type:Number},
  slug: { type: String, slug: 'name', unique: true },

},{timestamps: true,});

//ADD PLUGIN
mongoose.plugin(slug);
City.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' });

module.exports = mongoose.model('City', City,'city');
