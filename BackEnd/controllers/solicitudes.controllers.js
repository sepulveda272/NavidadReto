import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";
import correoNotificacion from "../functions/notificacionCorreo.js"

export const getSolicitudes = async (req,res) =>{
    try {
        const solicitadoDB = (await conection()).Solicitud;
        const solicitud = await solicitadoDB.find().toArray();
        res.json(solicitud);
    } catch (error) {
        console.log(error);
    }
}

export const postSolicitud = async (req,res) =>{
    try {
        const { nombre, Apellido, empresa, email_contacto, telefono_contacto/* , Id_usuario */ } = req.body;
        const db = await conection();

        correoNotificacion(0, nombre, Apellido, empresa, email_contacto, telefono_contacto);

       /*  const searchUsuario = new ObjectId(Id_usuario);
        const usuario = await db.Usuarios.findOne({ _id: searchUsuario });

        if (!usuario) {
        return res.status(404).json({ error: "usuario no encontrado" });
        } */

        const nuevaSolicitud = {
            nombre,
            Apellido,
            empresa,
            email_contacto,
            telefono_contacto/* ,
            Id_usuario: usuario._id */
        };
        await db.Solicitud.insertOne(nuevaSolicitud);
      
        res.json(nuevaSolicitud);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un error al agregar al candidato" });
    }
}

export const deleteSolicitudes = async (req, res) => {
    try {
      const { id } = req.params;
      const solicitadoId = new ObjectId(id);
      const solicitadoDB = (await conection()).Solicitud;
      const solicitud = await solicitadoDB.findOne({
        _id: solicitadoId,
      });
      if (!solicitud) {
        return res.status(404).json({ error: "solicitud no encontrado" });
      }
      await solicitadoDB.deleteOne({ _id: solicitadoId });
      res.json({ message: "Se ha desactivado el solicitud", solicitud });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "Hubo un error al desactivar el solicitud de la database" });
    }
  };