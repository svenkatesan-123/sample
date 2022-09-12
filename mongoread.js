const MongoClient =require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database= 'e-comm';

async function dbConnection(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
    // let response = await collection.find({name:'iphone'}).toArray();
    // console.log(response);
}

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('product');
//     let response = await collection.find({name:'iphone'}).toArray();
//     console.log(response);
// }
// dbConnection().then((resp)=>{
//    resp.find({name:'iphone'}).toArray().then((data)=>{
//     console.warn(data)
//    })
// })

// console.warn(dbConnection());



const main =async ()=>{
    let data =await dbConnection();
    data = await data.find().toArray();
    console.warn(data);
}
main();