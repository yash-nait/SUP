const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./db")
const componentRouter = require('./routes/component-router')
const { request } = require("http")

const app = express()


const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on("error",console.error.bind(console,"mongodb connection error:"))

app.use("/api", componentRouter);

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  });
}

app.listen(apiPort,()=>{
  console.log("server running on 3000")
})
