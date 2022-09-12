const express = require("express");
const connectDB=require("./db/connection");
const app= express();

connectDB();

const bodyParser = require("body-parser");
const validator= require("validator");

const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index");
});

app.post("/", function (req,res){
    let beds=new BedAvailability({
        general_total: req.body.general_total,
        general_occupied: req.body.general_occupied,
        general_available:req.body.general_available,
        oxygen_total: req.body.oxygen_total,
        oxygen_occupied: req.body.oxygen_occupied,
        oxygen_available:req.body.oxygen_available,
        withoutVen_total: req.body.withoutVen_total,
        withoutVen_occupied: req.body.withoutVen_occupied,
        withoutVen_available:req.body.withoutVen_available,
        withVen_total: req.body.withVen_total,
        withVen_occupied: req.body.withVen_occupied,
        withVen_available:req.body.withVen_available,
        // email: req.body.fnumber,
        
        

    });

    newHospital.save();
    res.redirect('/');
});

app.listen(port, function(){
    console.log(`Server is running on port number ${port}`);
});