const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
});


app.post("/", (req, res) => {
    var w = Number(req.body.weight);
    var h = (Number(req.body.height))/100;
    var bmi = Math.round(w/(h*h)) ;

    if(bmi < 18.5) {
        res.send(`<p>Your Body Mass Index is ${bmi}. This is considered underweight.</p>`)
    } else if(bmi < 24.9) {
        res.send(`<p>Your Body Mass Index is ${bmi}. This is considered normal.</p>`)
    } else {
        res.send(`<p>Your Body Mass Index is ${bmi}. This is considered overweight.<p>`)
    }
})




const port = 3000;
app.listen(port, () => {
    console.log(`BMI Calculator app listening on ${port} ` );
})