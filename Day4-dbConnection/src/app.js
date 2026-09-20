const express = require("express");
const dbConnection = require("./config/db");


const app = express();
app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  res.send("Main Chaalu ho gya hu");
});

app.post('/create', async (req, res)=>{
  let {title, description }= req.body;


  const newNote = await NotesModel.create({
    title, 
    description,
  });

  res.send({
    success: true,
    message:"Note Created successfully",
  });
});

module.exports = app;
