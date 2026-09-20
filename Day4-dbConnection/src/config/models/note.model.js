const mongoose = require('mongoose');

let notesSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true,
    },

    description: {
        type: String,
        minLength: 10,
    },
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports= NoteModel;