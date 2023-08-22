const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req, res){
    res.send("Web Developer and Youtuber");
});

app.get("/contact", function(req, res){
    res.send("My mail address: tamimmahmud49@gmail.com");
});

app.get("/calculator", function(res, res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmi", function(res, res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/calculator", function(req, res){

     console.log(req.body);

     let n1 = Number(req.body.v1)
     let n2 = Number(req.body.v2)
     let sum = n1 + n2;
     res.send('The sum is:' + sum);
});

app.post("/bmi", function(req, res){
    let b1 = Number(req.body.weight)
    let b2 = Number(req.body.height)
    let bmi = b1 / (b2*b2);
    res.send('The Body is: ' + bmi);
})
 
//servername and port
app.listen(3000, function(req, res){
    console.log("server is running now");
});