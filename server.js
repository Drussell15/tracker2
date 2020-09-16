//require express, morgan and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//setting up port and express app
const app = express();
const PORT = process.env.PORT || 3000;



app.use(logger("dev"));
//set up express app to handle data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//setting up static files

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
})

//setup routes//
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//start listner

app.listen(PORT, function () {
  console.log(`app running on port ${PORT}!`);
});
