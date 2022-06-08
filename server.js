const express = require("express");
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

//const multer  = require('multer')

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
  "mongodb+srv://fouadae:0616087324fouad@cluster0.njjph.mongodb.net/med-books?retryWrites=true&w=majority";

//middleware
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));

const conn = mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log("err"));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes

app.get("/", (req, res) => {
  res.redirect("/books");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// book routes
app.use("/books", bookRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
