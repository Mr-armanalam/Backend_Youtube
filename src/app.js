import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN ,// replace with your frontend URL
}))

app.use(express.json({limit:"16kb"})) //for incoming form data understanding
app.use(express.urlencoded({extended:true,limit:"16kb"})) //for incoming url (params) including special character understanding
app.use(express.static("public")) //for static file use
app.use(cookieParser()) //for reading/deleting a cookies by server only


export {app}