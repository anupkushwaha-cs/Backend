// console.log("Anup singh");
// console.log("kya haal h tumhare");

// console.log("khana kha liya kya apne agar nhi khaya to khakar aaiye");


let http = require("http");

let server = http.createServer((req, res)=>{
    console.log("Hello");
    
});


// Create
app.post("/create",(req, res)=>{

  let body = req.body;

  users.push(body);
  res.send(users);
});


server.listen(()=>{
    console.log("This is on port 3000");
    
})

