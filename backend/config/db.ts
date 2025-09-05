import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://klab:klab-123@cluster0.gmnft1x.mongodb.net/klab-product').then(()=>console.log("DB Connected"));
}