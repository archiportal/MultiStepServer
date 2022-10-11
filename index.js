import express from 'express';
import mongoose, { get } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import FormModel from './models/FormDetails.js';

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get("/getForm", async (req,res)=>{
    try{
        const getdata = await FormModel.find();
        res.status(200).json(getdata);
    } catch(error){
        res.status(404).json({message:error.message});
    }
});

app.post("/postForm",async (req,res)=>{
    const form = req.body;
    const newForm = new FormModel(form);
    try {
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
})

const CONNECTION_URL = 'mongodb+srv://archi7:Aizawashota07@cluster0.9ieuikq.mongodb.net/mernFirst?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL)
.then(()=>{
    app.listen(3001,()=>{
        console.log(`Server connected to 3001`); 
    })
})
.catch((error)=>{
    console.log(error.message);
})

