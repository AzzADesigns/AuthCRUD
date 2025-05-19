import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "tu_contraseña_segura",
    database: "taskdb"
})

pool.on("connect", () => {
    console.log("database connected")
})
