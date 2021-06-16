require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const fs = require("fs");

const authRoutes = require("./routes/authRoutes");
const googleRoutes = require("./routes/googleRoutes");
const contactRoutes = require("./routes/contactRoutes");
const workspaceRoutes = require("./routes/workspaceRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

// Allow the app to accept JSON on req.body
app.use(express.json());

//Initializing Passport
app.use(passport.initialize());
//passport template
require("./config/passport");

//To pass CORS policy..which will help to run React and Node separately on diff. hosts
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//Routes
app.use("/contact", contactRoutes);
app.use("/api/dashboard/workspace", workspaceRoutes);
app.use("/api/dashboard/profile", profileRoutes);
app.use("/api", authRoutes);
app.use("/", googleRoutes);

// For any unknown API request
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(500).json({ message: error.message || "Something went wrong" });
});

//Setting up database and backend Server
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = `mongodb://localhost:27017/encomecedb`;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`MongoDB Connected and Connection started at ${PORT}`);
      console.log(`Local -> http://localhost:8000`);
      console.log(`Client Origin -> ${process.env.CLIENT_ORIGIN}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
