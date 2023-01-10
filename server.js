const express = require('express');
const app = express();

//Greetings
//Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".
app.get('/greeting',(req,res)=>{
    res.send("Hello, stranger");
});
//Give the greeting route a param /:name
//When hitting the route, the page should display a message
// such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" 
//(ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).
app.get('/greeting/:name',(req,res)=>{
    res.send(`${req.params.name} ! It's so great to see you!`);
});
app.listen(5000,()=>console.log("listening on port 5000"));