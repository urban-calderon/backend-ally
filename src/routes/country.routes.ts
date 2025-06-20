import { Router } from 'express';
import { countriesController } from '../controllers/country.controller';

const router = Router();

router.get('', countriesController);

export default router;