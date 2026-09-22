const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    minlength: [20, "Minimum 20 charecter are require"],
  },
});

const NoteModel = mongoose.model("notes", noteSchema);

module.exports = NoteModel;
