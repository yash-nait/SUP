const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Component = new Schema({
    title : {type: String,required: true},
    type : {type: String,required: true},
    description : {type: String,required: true},
    link : {type: String, required: true}
  },
  {
  timestamps : true
  }
)

module.exports = mongoose.model("components",Component)
