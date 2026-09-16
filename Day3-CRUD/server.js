let express = require("express");
 
let app = express();
app.use(express.json())

let users =[];



// Create
app.post("/create",(req, res)=>{

  let body = req.body;

  users.push(body);
  res.send(users);
});



//Read--->get
app.get("/", (req,res)=>{
  req .send(users)
});

//Update
app.put("/update/:id", (req,res)=>{
  let {id} = req.params;
  let {name } = req.body;

  let updateUser = users.push.map((val)=>
  val.id === id? {...val, name } : val
)
res.send(updateUser);
})

//Delete
app.delete("/delete/:id", (req,res)=>{
  let {id} = req.params;

  userData = users.filter((val)=>val.id!==id)
    res.send("User Deleted Successfully")
  
})


let port= 3000;

app.listen(port ,()=>{
  console.log( `Server is running on ${port} port`)
});