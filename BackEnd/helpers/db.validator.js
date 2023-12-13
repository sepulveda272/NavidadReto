import { conection } from "../database/conection.js";

export const isValidRole = async(nombre= '')=>{
    const db = await conection()
    const existeRol = await db.Rol.findOne({nombre});
    if(!existeRol){
            throw new Error(`El rol ${nombre} no esta registrado en la base de datos`);
    }
}