const express = require("express");

const connectDB = require("./config/connectDB");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("me chalu hu");
});

app.use("/notes", notesRoute);

module.exports = app;