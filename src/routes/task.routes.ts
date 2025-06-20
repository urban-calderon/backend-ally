import { Router } from 'express';
import { todoController } from './../controllers/task.controller';

const router = Router();

router.get('', todoController);

export default router;