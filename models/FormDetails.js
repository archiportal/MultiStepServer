import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Mobile:{
        type:String,
        required:true,
    },
    Nation:{
        type:String,
        required:true,
    },
    Institution:{
        type:String,
        required:true,
    },
    Course:{
        type:String,
        required:true,
    },
    Stream:{
        type:String,
        require:true,
    },
    StartDate:{
        type:String,
        required:true,
    },
    EndDate:{
        type:String,
        required:true,
    },
    Cgpa:{
        type:String,
        required:true,
    },
    Percent:{
        type:String,
        required:true,
    },
})

const FormModel = mongoose.model("formentries",FormSchema)

export default FormModel;