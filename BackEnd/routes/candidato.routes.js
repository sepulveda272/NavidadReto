import { Router } from "express";
import { check } from "express-validator";
import { solicitadoCandidato, getCandidatos, getCandidatosS, postCandidatos, deleteCandidato } from "../controllers/candidato.controllers.js";
import { validateJWT } from "../middleware/validate.jwt.js";
import validateDocuments from "../middleware/validate.documents.js";
import isAdminRole from "../middleware/validate.role.js";

const routes = Router()

routes.get("/", getCandidatos)
routes.get("/solicitados", [
    validateJWT,
    isAdminRole,
    validateDocuments
],getCandidatosS)
routes.post("/add",[
    check('nombre', 'Nombre es Olbigatorio').not().isEmpty(),
    check('apellido','Apellido es obligatorio').not().isEmpty(),
    check('Especialidad','Especialidad es obligatorio').not().isEmpty(),
    check('NivelSeniority','NivelSeniority es obligatorio').not().isEmpty(),
    check('Pais','Pais es obligatorio').not().isEmpty(),
    check('Departamento','Departamento es obligatorio').not().isEmpty(),
    check('tecnologia','Tecnologia es obligatorio').not().isEmpty(),
    check('salario','Salario es obligatorio').not().isEmpty(),
    check('NivelIngles','Nivel Ingles es obligatorio').not().isEmpty(),
    check('biografia','Biografia es obligatorio').not().isEmpty(),
    validateJWT,
    isAdminRole,
    validateDocuments
], postCandidatos)
routes.delete("/:id", [
    validateJWT,
    isAdminRole,
    validateDocuments
], solicitadoCandidato)
routes.delete("/borro/:id", [
    validateJWT,
    isAdminRole,
    validateDocuments
], deleteCandidato)

export default routes