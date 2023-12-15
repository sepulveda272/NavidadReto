import { Router } from "express";
import { check } from "express-validator";
import { deleteSolicitudes, getSolicitudes, postSolicitud } from "../controllers/solicitudes.controllers.js";
import { validateJWT } from "../middleware/validate.jwt.js";
import validateDocuments from "../middleware/validate.documents.js";
import isAdminRole from "../middleware/validate.role.js";

const routes = Router()

routes.get("/", [
    validateJWT,
    isAdminRole,
    validateDocuments
], getSolicitudes)
routes.post("/add", [
    validateJWT,
    validateDocuments
], postSolicitud)
routes.delete("/:id", [
    validateJWT,
    isAdminRole,
    validateDocuments
], deleteSolicitudes)

export default routes;