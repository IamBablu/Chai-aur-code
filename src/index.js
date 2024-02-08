import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { App } from "./App.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
  App.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("DB connection failed" ,err);
})




















/* (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT,()=>{
        console.log(`process is running on ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
})(); */
