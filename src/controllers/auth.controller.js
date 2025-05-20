import bcrypt from "bcrypt"
import { pool } from "../db.js"
import { createAccesToken } from "../libs/jwt.js";

export const signin= async (req, res)=>{
    const {email, password} = req.body

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])

    if (result.rowCount === 0){
        return res.status(400).json({
            message: "el correo no esta registrado"
        })
    }

    const validPassword = await bcrypt.compare(password, result.rows[0].password)
    //el problema puede estar o aca , o en el middleware, probar quitar el middleware ya que es posible que como no tiene ningun otken , no le este llegando lo que necesita, o proba alguna que si tenga token, o crea una nueva con un token
    console.log(validPassword)

    if(!validPassword){
        return res.status(400).json({
            message:"La contraseña es incorrecta"
        })
    }

    const token = await createAccesToken({id: result.rows[0].id})

        res.cookie('token', token, {
            httpOnly:true,
            //secure: true,
            sameSite:'none',
            maxAge:24 * 60 * 60 * 1000 // un dia
        })
        
        return res.json(result.rows[0])

}

export const signup= async (req, res)=> {
    const {name, email, password} = req.body;

    try {

        const hashedPassword= await bcrypt.hash(password, 10)
        
        const result = await pool.query(
            "INSERT INTO users(name, email, password) VALUES($1, $2, $3) Returning *",
            [name, email, hashedPassword]
        )

        const token= await createAccesToken({id: result.rows[0].id})

        res.cookie('token', token, {
            httpOnly:true,
            //secure: true,
            sameSite:'none',
            maxAge:24 * 60 * 60 * 1000 // un dia
        })

        return res.json(result.rows[0])
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