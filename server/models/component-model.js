const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Component = new Schema({
    title : {type: String,required: true},
    type : {type: String,required: true},
    description : {type: String,required: true},
    code : {type : String ,required: true},
    image1 : {type: String},
    image2 : {type: String},
  },
  {
  timestamps : true
  }
)

module.exports = mongoose.model("components",Component)
