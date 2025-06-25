import { Router } from 'express';
import { getAllUsersController } from '../controllers/user.controller';
import { AuthMiddleware } from '../middlerwares/auth.middlerware';

const router = Router();

router.get('/', [AuthMiddleware.validateJWT], getAllUsersController);

export default router;