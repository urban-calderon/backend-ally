import { Request, Response, NextFunction } from 'express';
import { getTasks } from './../services/task.service';

export const todoController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const tasks = await getTasks();

        res.status(201).json({
            success: true,
            data: tasks,
        });
    } catch (error) {
        next(error);
    }
}