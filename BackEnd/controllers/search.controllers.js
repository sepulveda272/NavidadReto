import { response } from "express";
import { ObjectId } from "mongodb";
import { conection } from "../database/conection.js";

const allowedCollections = ["Candidato"];

const searchCandidatosEspecialidad = async (criterio = "", res = response) => {
  const isMongoId = ObjectId.isValid(criterio);

  try {
    const candidatoDB = (await conection()).Candidato;

    if (isMongoId) {
      const candidato = await candidatoDB.findById(criterio);
      return res.json({
        result: (candidato) ? [candidato] : [],
      });
    }

    const regex = new RegExp(criterio, "i");
    const candidatos = await candidatoDB.find({
      $or: [{ Especialidad: regex }],
      $and: [{ estado: ("Activo") }],
    }).toArray();

    res.json({
      result: candidatos,
    });
  } catch (error) {
    console.error("Error en la búsqueda de candidatos:", error);
    res.status(500).json({
      msg: "Hubo un error en la búsqueda de candidatos",
    });
  }
};

export const searchEspecialidad = async (req, res = response) => {
  const { coleccion, criterio } = req.params;

  if (!allowedCollections.includes(coleccion)) {
    return res.status(400).json({
      msg: `El buscador solo permite las colecciones: ${allowedCollections}`,
    });
  }

  switch (coleccion) {
    case "Candidato":
      await searchCandidatosEspecialidad(criterio, res);
      break;

    default:
      res.status(500).json({
        msg: "Esta búsqueda no existe",
      });
  }
};


