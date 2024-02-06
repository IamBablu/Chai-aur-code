import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB();




















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
