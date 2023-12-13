import { Router } from "express";
import { check } from "express-validator";

import { deleteUsuario, getUsuario, postUsuario } from "../controllers/usuarios.controllers.js";
import isAdminRole from "../middleware/validate.role.js";
import validateDocuments from "../middleware/validate.documents.js";
import { validateJWT } from "../middleware/validate.jwt.js"


const routes = Router();

routes.get("/",[
    validateJWT,
    isAdminRole,
    validateDocuments
],getUsuario);
routes.post("/add", postUsuario)
routes.delete("/:id",[
    validateJWT,
    isAdminRole,
    validateDocuments
], deleteUsuario)

export default routes