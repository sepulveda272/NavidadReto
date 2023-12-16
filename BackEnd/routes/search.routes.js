import { Router } from 'express';
import { searchEspecialidad } from '../controllers/search.controllers.js';

const router = Router();


router.get('/:coleccion/:criterio', searchEspecialidad )




export default router;