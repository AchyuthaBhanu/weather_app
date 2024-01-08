const express=require('express')
const app = express();
const cors = require('cors')
const mongoose =require('mongoose');
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Hello from server...")})

const DB = async()=>{
    await mongoose.connect('mongodb+srv://satyavaniachyutha:Bhanu_66669@cluster0.juhffhf.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>{console.log("Connected to dataBase...")}
    ).catch( 
        (err)=>{console.log("An error occured while connecting to database...",err)}
    )     
}
DB();
app.listen(5000,()=>{console.log("Server is running on port 5000...")})