const express = require("express");
const app = express();
const {MongoClient} = require("mongodb");

const url = "mongodb+srv://RK:96299@cluster0.gsjxsww.mongodb.net/?retryWrites=true&w=majority"

const dbname = "database_nodejs";
let db = ""

async function connectDb(){
    try{
        const client = await MongoClient.connect(url);
        console.log("connected to MongoDB");
        db = client.db(dbname);
    }
    catch{
        console.log("error");
    }
}
connectDb().then(()=>{
    app.listen(3000,()=>{
        console.log("server running");
    })
})
app.get("/",async (req,res)=>{
    const data = {name: "Rajkumar", username: "RK"};
    const result = await db.collection("nodejs_data").insertOne(data);
    console.log("data inserted");
    res.send("data inserted")
})