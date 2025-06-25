import { Router } from 'express';
import { countriesController } from '../controllers/country.controller';
import { AuthMiddleware } from '../middlerwares/auth.middlerware';

const router = Router();

router.get('/', [AuthMiddleware.validateJWT], countriesController);

export default router;