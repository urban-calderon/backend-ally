import { Request, Response, NextFunction } from 'express';
import { getCountries } from '../services/country.service';

export const countriesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const countries = await getCountries();

        res.status(201).json({
            success: true,
            data: countries,
        });
    } catch (error) {
        next(error);
    }
}