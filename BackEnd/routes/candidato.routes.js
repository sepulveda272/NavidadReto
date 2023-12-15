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
routes.post("/add", postCandidatos)
routes.delete("/:id", [
    validateJWT,
    validateDocuments
], solicitadoCandidato)
routes.delete("/borro/:id", [
    validateJWT,
    isAdminRole,
    validateDocuments
], deleteCandidato)

export default routes