const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
// const http = require('http');
const enforce = require('express-sslify');

const routes = require("./routes");

const app = express();
// const User = require("./models/User.js");
app.use(enforce.HTTPS( { trustProtoHeader: true }));
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(express.static("public"));

app.get(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// http.createServer(app).listen(PORT, function() {
//     console.log('Express server listening on port ' + PORT);
// });
