//this should be outside the static files since static files should contain only the 
//frontend files
//Express --> Live server
//when we use live server if we update the code it will automatically updates in the browser
//but with express if we want to use that -->nodemon (npm package)
//nodemon-->automatically updates

// http://127.0.0.1.3000/hi?phone=12
//while passing the parameters give it with ?

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const static = express.static("static")
app.use("/",static)  // if we use /forms instead of / --> cannot GET/
// we can serve ststic files in any path here we are using /
//app.use -- > app.get


/*app.get("/hi", (req,res)=>{
    console.log(req.query); 
    res.json(req.query)
}); */ //post -- >boy in postman
//get params in postman
//if we give params it will automatically updates the url

//get method --> query
//post method --> body
app.post("/hi", (req,res)=>{
    console.log(req.body); 
    //res.send("Hello");
    res.json({
        name: req.body.name,
        description:req.body.description,
        date:req.body.date,
        amount:req.body.amount,

    })
});

//fetch is an package
//todos is an third party api
/*app.get("/todos", async(req,res) => {
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
   //.then((response)=>response.json())
   //.then((json)=>res.json(json));
   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
   const todos = await response.json()
   res.json(todos)
});*/

app.get("/todos/2", async(req,res) => {
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
   //.then((response)=>response.json())
   //.then((json)=>res.json(json));
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
   const todos = await response.json()
   res.json(todos)
});

//to generate the todos for many times
//id-->key(here)
app.get("/todos/:id",async(req,res) => {
    const {id:todoId} = req.params;
    res.json(todoId)
})

app.listen(5001, () =>{
    console.log("App Running");
});