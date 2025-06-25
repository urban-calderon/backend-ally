import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../config/jwt.adapter';
import { findUserById } from '../services/user.service';
import { CustomError } from '../utils/custom.error';

export class AuthMiddleware {

    static async validateJWT( req: Request, res: Response, next: NextFunction ) {

        const authorization = req.header('Authorization');

        if( !authorization )return next(CustomError.unauthorized('No token provided'));
        
        if ( !authorization.startsWith('Bearer ') ) return next(CustomError.unauthorized('Invalid Bearer token'));
    
        const token = authorization.split(' ')[1] || '';
    
    
        try {
    
            const payload = await JwtAdapter.validateToken<{ id: string }>(token);
            if ( !payload ) return next(CustomError.unauthorized('Invalid token'));
            
            const user = await findUserById(parseInt(payload.id));
            if ( !user ) return next(CustomError.unauthorized('Invalid token - user'));
    
            next();
    
        } catch (error) {
          
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
    
        }
        
    }
}