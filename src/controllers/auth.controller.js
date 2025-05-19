import bcrypt from "bcrypt"
import { pool } from "../db.js"
import { createAccesToken } from "../libs/jwt.js";

export const signin= (req, res)=> res.send("ingresando")

export const signup= async (req, res)=> {
    const {name, email, password} = req.body;

    try {

        const hashPassword= await bcrypt.hash(password, 10)
        
        const result = await pool.query(
            "INSERT INTO users(name, email, password) VALUES($1, $2, $3) Returning *",
            [name, email, hashPassword]
        )

        const token= await createAccesToken({id: result.rows[0].id})

        res.cookie('token', token, {
            httpOnly:true,
            //secure: true,
            sameSite:'none',
            maxAge:24 * 60 * 60 * 1000 // un dia
        })
        //return res.json(result.rows[0])
        return res.json({
            token:token,
        })
    } catch (error) {
        console.error("Error detallado:", error); 
        if(error.code === "23505"){
            return res.status(400).json({
                message:"el correo ya esta registrado",
            })
        }

        console.error(error);

        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}
export const signout= (req, res)=> res.send("cerrando sesion")
export const profile= (req, res)=> res.send("perfil del usuario")