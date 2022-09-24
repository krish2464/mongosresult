const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
  name:String,
  lname:String,
  age:Number,
  email:String,
  password:String,
  dob:String,
  gender:String,
  phone:Number,
  hobby:[String],
  address:String,
  s1:Number,
  s2:Number,
  s3:Number,
  s4:Number,
  s5:Number,
  

});
const list = mongoose.model('list',listSchema);
module.exports = list;




