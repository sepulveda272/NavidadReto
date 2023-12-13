import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import usuarioRouter from "../routes/usuarios.routes.js"
import loginRouter from '../routes/login.routes.js';

dotenv.config()

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.app.use(cookieParser());

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/usuarios", usuarioRouter);
        this.app.use("/login", loginRouter);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server conected on Port ${this.port}`);
        })
    }
}

export default Server