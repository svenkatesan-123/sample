const express =require('express');
const mongoose = require('mongoose');
const app=express();
const ejs = require('ejs');

const url='mongodb+srv://shankar:Karadi123!@cluster0.8ccbfh9.mongodb.net/moviesDB?retryWrites=true&w=majority'

app.set('view engine','ejs');
mongoose.connect(url);

const moviesSchema ={
    name: String,
    genre: String,
    year: String
}

const Movie = mongoose.model('Movie',moviesSchema);

app.get('/',(req,res)=>{
   Movie.find({},function(err,movies){
     res.render('index',{
        moviesList: movies
     })
   })

   
})


// app.get('/',(req,res)=>{
//     let name ='shankar';
//     res.render('index',{
//         username: name
//     });
// })
app.listen(4000,function(){
    console.log('server is running');

})

