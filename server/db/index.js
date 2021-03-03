require('dotenv').config()
const mongoose = require("mongoose")


mongoose
  .connect(`mongodb+srv://admin:adminonmongodb@sup-react.pn0gp.mongodb.net/sup-react?retryWrites=true&w=majority`,{useNewUrlParser: true,useUnifiedTopology: true})
  .catch((e)=>{console.error("connection error",e.message)})

const db = mongoose.connection

module.exports = db
