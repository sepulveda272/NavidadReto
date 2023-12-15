import { response } from "express";
import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

const allowedCollections = [
    "Candidato"
]

const searchCandidatos = async (criterio = "", res = response) => {
    const isMongoId = ObjectId.isValid(criterio);

    const collection = (await conection()).Candidato;

    if (isMongoId) {
        const candidato = await collection.findOne({ _id: new ObjectId(criterio) });
        console.log(candidato);
        return res.json({
            result: (candidato) ? [candidato] : [],
        });
    }

    const regex = new RegExp(criterio, 'i');
    const candidatos = await collection.find({
        $or: [{ examen: regex }],
        $and: [{ estado: true }],
    }).toArray();

    res.json({
        result: candidatos,
    });
};

export const search = ( req, res = response ) => {
    const { coleccion, criterio } = req.params;

    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion){
        case 'Candidato':
            searchCandidatos(criterio, res)
        break;

        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
    }
}