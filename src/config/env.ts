import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const JWT_SEED = process.env.JWT_SEED || 'ASDhkjasdhkjaSHDKJASHDKJ18923';