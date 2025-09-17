const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let dbConnection=async()=>{
    await client.connect();
    let db=client.db("mongoDBProject_DataBase"); //same like db use in mongodb or make db here
    return db;


}

module.exports={dbConnection};