const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const server = require("http").createServer(app);

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./.config/config.json");

const port = 8080;

app.use(cors()); // cors 미들웨어를 삽입합니다.

// // DB connection
const mongoURL = `mongodb+srv://jh9485:${config.dbPassword}@cluster0.ujxjemn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", (_) => {
    console.log("Database connected:", mongoURL);
});
db.on("error", (err) => {
    console.error("connection error:", err);
});

// // Web server

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("./user/user-api"));
app.use(require("./event/event-api"));
app.use(require("./month/month-api"));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

server.listen(port, () => {
    console.log("server is running on 8080");
});
