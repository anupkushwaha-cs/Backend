const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const NotesModel = require("./models/note.model");

const connectDb = require("./config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("done");
});

app.post("/create", async(req, res) => {
  let { title, description } = req.body;

  const newNote =await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message:"Note Created Successfully",
    data:newNote,
  });
});

connectDb();

module.exports = app;