const express =require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const url='mongodb+srv://shankar:Karadi123!@cluster0.8ccbfh9.mongodb.net/moviesDB?retryWrites=true&w=majority'


mongoose.connect(url,{ useNewUrlParser: true },{useUnifiedTopology: true});

const moviesSchema ={
    name: {
        type: String,
        required:true
    }, 
    genre: String,
    year: String,
    cars: String
}

const Movie = mongoose.model('Movie',moviesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+'/indexpost.html');
})

app.post("/",function(req,res){
    let NewMovie =new Movie({
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        cars: req.body.cars
    });
    NewMovie.save();
    res.redirect('/');
})


app.listen(3000,function(){
    console.log("server is running");
})