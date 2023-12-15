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
routes.post("/add",[
    check('nombre','Nombre es obligatorio').not().isEmpty(),
    check('tipo_usuario',"Tipo Usuario es obligatorio").not().isEmpty(),
    check('email','Email es obligatorio').isEmail(),
    check('telefono','Telefono es obligatorio').not().isEmpty(),
    check('password','Password es obligatorio y Debe tener 6 digitos o más').not().isEmpty().isLength({min:6}),
], postUsuario)
routes.delete("/:id",[
    validateJWT,
    isAdminRole,
    validateDocuments
], deleteUsuario)

export default routes