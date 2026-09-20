const {default : mongoose} = require("mongoose");


const dbConnection = async () => {
 try {
     await mongoose.connect(
    "mongodb+srv://anupkushwaha916_db_user:Anup12345@cohort-cluster.uh0wove.mongodb.net/"
  );
  console.log("Mongoos Connected");
 } catch (error) {
    console.log("Error aa gya h",error)
 }
};

module.exports= dbConnection;