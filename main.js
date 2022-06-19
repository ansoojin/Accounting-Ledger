const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./.config/config.json')
const app = express();

function normalizePort(val) {
  var port = parseInt(val, 10)
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || '3000');


// DB connection
const mongoURL = `mongodb+srv://jh9485:${config.dbPassword}@cluster0.ujxjemn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
const db = mongoose.connection
db.once("open", (_) => {
  console.log("Database connected:", mongoURL)
})
db.on("error", (err) => {
  console.error("connection error:", err)
})

// API 부분
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require("./user-api"))
app.use(require("./event-api"))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
