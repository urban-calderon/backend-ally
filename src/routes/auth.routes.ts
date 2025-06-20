import { Router } from 'express';
import { registerUserController } from '../controllers/user.controller'; 
import { userSchema, loginSchema } from '../utils/validation-schemas'; 
import { validate  } from '../middlerwares/validation.middleware';
import { loginController } from '../controllers/auth.controller';

const router = Router();

router.post('/login', validate(loginSchema), loginController);
router.post('/register', validate(userSchema), registerUserController);

export default router;