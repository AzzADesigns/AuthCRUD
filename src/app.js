import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

import taskRoutes from "./routes/task.routes.js"
import authRoutes from "./routes/auth.routes.js"

const app = express()


//Middleweares
app.use(cors({origin: "http://localhost:5173",
    credentials: true
}))
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.get("/", (req, res)=> res.json({message: "wellcome to my API"}))
app.use("/api",taskRoutes)
app.use("/api",authRoutes)

//error handler
app.use((err, req, res, next)=>{
    res.status(500).json({
        status: "error",
        message: err.message
    })
});

export default app;