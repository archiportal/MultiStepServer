import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import FormModel from './models/FormDetails.js';

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get("/getForm",(req,res)=>{
    FormModel.find({}, (err,result)=>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

const CONNECTION_URL = 'mongodb+srv://archi7:Aizawashota07@cluster0.9ieuikq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL)
.then(()=>{
    app.listen(3001,()=>{
        console.log(`Server connected to 3001`); 
    })
})
.catch((error)=>{
    console.log(error.message);
})

