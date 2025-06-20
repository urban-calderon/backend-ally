export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    lastLoginAt?: Date;
}

export interface UserInput {
    name: string;
    email: string;
    password: string;
}