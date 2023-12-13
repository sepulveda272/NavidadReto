import { Router } from "express";
import { check } from "express-validator";

import { deleteUsuario, getUsuario, postUsuario } from "../controllers/usuarios.controllers.js";
import isAdminRole from "../middleware/validate.role.js";
import { isValidRole } from "../helpers/db.validator.js";
import { validateJWT } from "../middleware/validate.jwt.js"


const routes = Router();

routes.get("/",getUsuario);
routes.post("/add", postUsuario)
routes.delete("/:id",[
    validateJWT,
    isAdminRole
], deleteUsuario)

export default routes