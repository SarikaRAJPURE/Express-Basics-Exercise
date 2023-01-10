const express = require('express');
const app = express();
//array of Magic 8 ball responses…..
let responses=["It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
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

//3. Magic 8 Ball
//Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question.
//Use this link to check output http://localhost:5000/magic/?phrase=Will%20I%20Be%20A%20Millionaire
//We can't use spaces in the url, so we use %20 to express a space in the url.
//So if the user hits that route and asks a question of "Will I be a Millionaire" 
//he should get his question asked and a random Magic 8 ball quote on the screen.
//**** Send the magic 8 ball response back between html <h1> tags
app.get('/magic', (req,res) => {
    console.log(req.query);
    let randomResponse = Math.floor(Math.random()*responses.length);
    
    res.send(`<h2>Question: ${req.query.phrase}?</h2><h1>Answer: ${responses[randomResponse]}</h1>`)
})

app.listen(5000,()=>console.log("listening on port 5000"));