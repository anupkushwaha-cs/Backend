const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      Message: "Note created Successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("Error in create note api", error);
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.status(200).json({
      message: "All notes fatched",
      data: allNotes,
    });
  } catch (error) {
    console.log("Error in get note api", error);
  }
};

module.exports={
    createNotesController,
    getAllNotesController,
};