import Express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const App = Express();
App.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
App.use(Express.json({limit:"16kb"}))
App.use(Express.urlencoded({extended:true, limit:"16kb"}))
App.use(Express.static("public"))
App.use(cookieParser())
export {App};