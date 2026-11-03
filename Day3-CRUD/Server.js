let express = require("express");

let app = express();

app.use(express.json());

let port = 3000;

let user = [];

//Create
app.post("/create", (req, res) => {
  let body = req.body;
  user.push(body);
  res.send("User saved successfully");
});

//Read
app.get("/", (req, res) => {
  res.send(user);
});

//Delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = user.filter((val) => val.id !== id);
  user = userData;
  res.send(userData);
});

//Update

app.put("/update/:id", (req, res) => {
  let { id } = req.params;

  let { name } = req.body;
  updatedUser = user.map((val) => (val.id === id ? { ...val,  name } : val));
  res.send(updatedUser);
});

app.listen(port, () => {
  console.log("Server is running on port 30000");
});
