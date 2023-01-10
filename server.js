const express = require('express');
const app = express();

//1. Greetings
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

//2. Tip Calculator
//Your app should have a route of '/tip' and it should expect 2 params. 
//One should be total and one should be tipPercentage.
//When hitting the route, the page should display 
//how much your tip will be based on the total amount of the bill and the tip percentage. 
//(ex. hitting '/tip/100/20' should display 20 on the page).
app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let tip;
    tip=(+req.params.total)*(+req.params.tipPercentage)/100;
    res.send(`Tip:${tip}$`);
});

app.listen(5000,()=>console.log("listening on port 5000"));