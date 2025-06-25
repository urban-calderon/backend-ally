import { Router } from 'express';
import { todoController } from './../controllers/task.controller';
import { AuthMiddleware } from '../middlerwares/auth.middlerware';

const router = Router();

router.get('/', [AuthMiddleware.validateJWT], todoController);

export default router;