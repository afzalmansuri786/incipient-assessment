import mongoose from "mongoose";

export const db = async() => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.warn(`Mongodb connected over :`, conn.connection.host)
  }catch(error){
    console.warn(error)
  }
}