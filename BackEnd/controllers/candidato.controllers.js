import { ObjectId } from "mongodb";
import { client, conection } from "../database/conection.js";

export const getCandidatos = async (req,res) =>{
    try {
        const candidatoDB = (await conection()).Candidato;
        const candidato = await candidatoDB.find({estado: "Activo"}).toArray();
        res.json(candidato);
    } catch (error) {
        console.log(error);
    }
}

export const getCandidatosS = async (req,res) =>{
    try {
        const candidatoDB = (await conection()).Candidato;
        const candidato = await candidatoDB.find({estado: "Solicitado"}).toArray();
        res.json(candidato);
    } catch (error) {
        console.log(error);
    }
}

export const getCandidatosId = async (req,res) =>{
    try {
        const candidatoDB = (await conection()).Candidato;
        const idObj = new ObjectId(req.params.id)
        const candidato = await candidatoDB.find({_id:idObj}).toArray()
        res.json(candidato)
    } catch (error) {
        console.log(error);
    }
}

export const postCandidatos = async (req,res) =>{
    try {
        const { nombre, apellido, Especialidad, NivelSeniority, Pais, Departamento, Tecnologia, salario, NivelIngles, biografia, Stack } = req.body;
        const db = await conection();
      
        const especialidad = await db.Especialidad.findOne({ especialidad: Especialidad });
        if (!especialidad) {
            return res.status(404).json({ error: "Especialidad no encontrado" });
        }

        const nivelSeniority = await db.NivelSeniority.findOne({ nombre: NivelSeniority });
        if (!nivelSeniority) {
            return res.status(404).json({ error: "Nivel de seniority no encontrado" });
        }

        const nivelIngles = await db.NivelIngles.findOne({ nivel_ingles: NivelIngles });
        if (!nivelIngles) {
            return res.status(404).json({ error: "Nivel de ingles no encontrado" });
        }

        const stacks = [];

        for (const stackName of Stack) {
            const stack = await db.Stack.findOne({ nombre: stackName });
        if (stack) {
            stacks.push(stack);
        } else {
            return res.status(404).json({ error: `Stack '${stackName}' no encontrado` });
        }
        }
        
        const tecnologias = [];

        for (const tecnologiaName of Tecnologia) {
            const tecnologia = await db.Tecnologia.findOne({ nombre: tecnologiaName });
        if (tecnologia) {
            tecnologias.push(tecnologia);
        } else {
            return res.status(404).json({ error: `tecnologia '${tecnologiaName}' no encontrado` });
        }
        }

        const nuevoCandidato = {
            nombre,
            apellido,
            Especialidad: especialidad.especialidad,
            NivelSeniority: nivelSeniority.nombre,
            ubicacion: {
                Pais,
                Departamento
            },
            Tecnologia: tecnologias,
            salario: Number(salario),
            NivelIngles: nivelIngles.nivel_ingles,
            biografia,
            Stack: stacks,
            Imagen: ("https://www.consultoragestal.com/wp-content/uploads/2023/07/3523424-02-300x300.png"),
            estado: ("Activo"),
        };
        await db.Candidato.insertOne(nuevoCandidato);
      
        res.json(nuevoCandidato);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un error al agregar al candidato" });
    }
}

export const solicitadoCandidato = async (req, res)=>{
    try {
        const { id } = req.params;
        const candidatoId = new ObjectId(id);
        const candidatoDB = (await conection()).Candidato;
        const candidato = await candidatoDB.findOne({
          _id: candidatoId,
        });
        if (!candidato) {
          return res.status(404).json({ error: "Candidato no encontrado" });
        }
        await candidatoDB.updateOne({ _id: candidatoId }, { $set: { estado: ("Solicitado") } });
        res.json({ message: "Se ha solicitado el candidato", candidato });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ error: "Hubo un error al desactivar el candidato de la database" });
      }
}


export const deleteCandidato = async (req, res) => {
    try {
      const { id } = req.params;
      const candidatoId = new ObjectId(id);
      const candidatoDB = (await conection()).Candidato;
      const candidato = await candidatoDB.findOne({
        _id: candidatoId,
      });
      if (!candidato) {
        return res.status(404).json({ error: "candidato no encontrado" });
      }
      await candidatoDB.deleteOne({ _id: candidatoId });
      res.json({ message: "Se ha desactivado el candidato", candidato });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "Hubo un error al desactivar el candidato de la database" });
    }
  };