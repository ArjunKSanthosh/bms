import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    title:{type:String},
    duration:{type:Number},
    genre:{type:String},
    releasedate:{type:String},
    language:{type:String},
    certification:{type:String},
    picture:{type:String},
    banner:{type:String},
    format:{type:String}
});
export default mongoose.model.Movies||mongoose.model("Movie",movieSchema);
