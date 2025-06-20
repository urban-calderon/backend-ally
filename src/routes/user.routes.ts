import { Router } from 'express';
import { registerUserController } from '../controllers/user.controller'; 
import { userSchema } from '../utils/validation-schemas'; 
import { validate  } from '../middlerwares/validation.middleware';

const router = Router();

router.post('/register', validate(userSchema), registerUserController);

export default router;