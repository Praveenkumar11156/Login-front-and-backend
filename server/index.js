import express from 'express'
import Bodyparser  from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import abc from "./routes/user.js"
import dotenv from 'dotenv';

const app= express()
dotenv.config()

app.use(cors())
app.use(Bodyparser.json())
app.use(Bodyparser.text())
app.use(express.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.use("/api/abc",abc) 

const password = encodeURIComponent("#1Include");
const dbUrl = `mongodb+srv://memmeringjoseph:${password}@cluster0.ev6af7k.mongodb.net/logoutForm?retryWrites=true&w=majority`;


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
.connect(dbUrl, connectionParams)
.then(() => {
    console.info("connected to the DB");
})
.catch((e) => {
    console.log("Error",e);
});

app.listen(4000,()=>{
    console.log("server is running on 4000");
})