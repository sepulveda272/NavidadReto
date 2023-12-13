import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";
import bcryptjs from "bcryptjs";

export const getUsuario = async (req, res) => {
  try {
    const usuarioDB = (await conection()).Usuarios;
    const usuario = await usuarioDB.aggregate([
      {
        $lookup: {
          from: "Rol", // Nombre de la colección de roles
          localField: "rol", // Ajustado a "rol"
          foreignField: "_id",
          as: "Rol"
        }
      },
      {
        $addFields: {
          "Rol": { $arrayElemAt: ["$Rol.nombre", 0] }
        }
      },
      {
        $project: {
          "_id": 1,
          "nombre": 1,
          "tipo_usuario": 1,
          "email": 1,
          "password": 1,
          "telefono": 1,
          "Rol": 1
        }
      }
    ]).toArray();
    
    res.json(usuario);
  } catch (error) {
    console.log(error);
  }
};

export const postUsuario = async (req, res) => {
  try {
    const { nombre, tipo_usuario, email, password, telefono } = req.body;
    const db = await conection();

    const salt = bcryptjs.genSaltSync();
    req.body.password = bcryptjs.hashSync(password, salt);
    
    const nuevo = { nombre, tipo_usuario, email, password: req.body.password, telefono, rol: new ObjectId("65794eeb85858c0baa350e49") };
    await db.Usuarios.insertOne(nuevo);
    res.json(nuevo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error al registrar al usuario" });
  }
}

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioId = new ObjectId(id);
    const usuariosDB = (await conection()).Usuarios;
    const usuario = await usuariosDB.findOne({
      _id: usuarioId,
    });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    await usuariosDB.deleteOne({ _id: usuarioId });
    res.json({ message: "Se ha desactivado el usuario", usuario });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Hubo un error al desactivar el usuario de la database" });
  }
};