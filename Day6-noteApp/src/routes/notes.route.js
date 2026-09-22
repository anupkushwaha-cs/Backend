const express = require("express");

const {
  createNotesController,
  getAllNotesController,
} = require("../controllers/notes.controller");

const router = express.Router();

console.log("Called.....");

router.post("/create", createNotesController);

router.get("/allNotes", getAllNotesController);

module.exports = router;