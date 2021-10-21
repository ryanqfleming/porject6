//const {MongoClient} = require('mongodb');
const mongoose =require('mongoose');
const express = require("express");
console.log("in node.js");

const app= express();
const dbURI ="mongodb+srv://ryanqfleming:DCFjbZHKL9Atku9w@cluster0.ncp8j.mongodb.net/ModelsSauce?retryWrites=true&w=majority";
mongoose.connect(dbURI)

.then((result) => console.log("connect")) 
.catch((error)=>console.log(err));

//app.get()

//async function main() {
    //console.log("in main function")
    //const uri = "mongodb+srv://ryanqfleming:DCFjbZHKL9Atku9w@cluster0.ncp8j.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
    //const client = new MongoClient(uri);
    //try {
    //await client.connect();
    //await listDatabases(client);
    //} catch (e) {
        //console.error(e);
    //} finally {
        //await client.close();
    //}
//}

//async function listDatabases(client){
    //databasesList = await client.db().admin().listDatabases();

    //console.log("Databases:");
    //databasesList.databases.forEach(db => console.log(' - ' + db.name));
//};
//main().catch(console.error);