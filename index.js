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

const static = express.static("static")
app.use("/",static)  // if we use /forms instead of / --> cannot GET/
// we can serve ststic files in any path here we are using /
//app.use -- > app.get


app.get("/hi", (req,res)=>{
    console.log(req.query); 
    //res.send("Hello");
    res.json({
        name: req.query.name,
        description:req.query.description,
        date:req.query.date,
        
    })
   
});

app.listen(3000, () =>{
    console.log("App Running");
});