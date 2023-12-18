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
    check('nombre','Nombre es obligatorio').not().isEmpty(),
    check('Apellido','Apellido es obligatorio').not().isEmpty(),
    check('empresa','Empresa es obligatorio').not().isEmpty(),
    check('email_contacto','Email es obligatorio').not().isEmpty().isEmail(),
    check('telefono_contacto','Telefono Contacto es obligatorio').not().isEmpty(),
    /* validateJWT, */
    validateDocuments
], postSolicitud)
routes.delete("/:id", [
    validateJWT,
    isAdminRole,
    validateDocuments
], deleteSolicitudes)

export default routes;