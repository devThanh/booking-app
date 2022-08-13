const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema


const User = new Schema({

    username: {type: String},
    email: {type: String},
    password: {type: String},
    address: {type:String},
    isAdmin: {
        type: Boolean,
        default: false
    },
  },{timestamps: true,});


  //ADD PLUGIN
mongoose.plugin(slug);
User.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' });

module.exports = mongoose.model('User', User)