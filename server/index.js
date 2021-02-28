const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./db")

const app = express()

const apiPort = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on("error",console.error.bind(console,"mongodb connection error:"))

app.get("/",(req,res)=>{
  res.send("HELLO WORLD")
})

app.listen(apiPort,()=>{
  console.log("server running on 3000")
})
