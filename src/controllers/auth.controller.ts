import { Request, Response, NextFunction } from 'express';
import { loginUser } from '../services/auth.service';

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loginData = req.body;
        const login= await loginUser(loginData);

        res.status(201).json({
            success:true,
            data: login,
        })
    } catch (error) {
        next(error);
    }
}