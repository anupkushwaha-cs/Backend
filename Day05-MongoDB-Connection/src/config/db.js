const mongoose = require("mongoose")

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anupkushwaha916_db_user:Anup12345@cohort-cluster.uh0wove.mongodb.net/n",
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
  }
};

module.exports = connectDb