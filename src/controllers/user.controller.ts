import { Request, Response, NextFunction } from 'express';
import { registerUser, getAllUsers } from '../services/user.service';

export const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.body;
        const createUser = await registerUser(userData);

        res.status(201).json({
            success: true,
            data: createUser,
        });
    } catch (error) {
        next(error);
    }
}

export const getAllUsersController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsers();

        res.status(201).json({
            success: true,
            users
        });
    } catch (error) {
        next(error);
    }
}