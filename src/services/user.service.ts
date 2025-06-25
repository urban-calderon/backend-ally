import { UserInput } from "../interfaces/user.interface";
import { hashPassword } from "../config/bcrypt.adapter";
import { CustomError } from "../utils/custom.error";
import { prisma } from "../config/prisma";

export const registerUser = async(userData: UserInput) => {

    const { name, email, password } = userData;

    const existingUser = await prisma.user.findUnique({
        where: { email: email },
    });

    if( existingUser ) {
        throw CustomError.badRequest('This email is already registered');
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Zone time
    const now = new Date();
    const offset = -6 * 60;
    const zoneTime = new Date(now.getTime() + offset * 60 * 1000);

    const createUser = await prisma.user.create({
        data: {
            fullName: name,
            email: email,
            password: hashedPassword,
            createdAt: zoneTime,
        },
    });

    return {
        id: createUser.id,
        email: createUser.email,
        name: createUser.fullName,
        createdAt: createUser.createdAt,
    }
}

export const findUserById = async (userId: number) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    
    if (!user) {
        return null; 
    }

    return user;
};

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            fullName: true,
            email: true,
            createdAt: true,
            lastLoginAt: true
        }
    });

    if(!users) {
        return null;
    }

    return users;
}