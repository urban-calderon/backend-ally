import { prisma } from "../config/prisma";
import bcrypt from 'bcrypt';
import { Auth } from "../interfaces/auth.interface";
import { JwtAdapter } from "../config/jwt.adapter";
import { CustomError } from "../utils/custom.error";

export const loginUser = async (userData: Auth) => {

    const { email, password } = userData;

    const user = await prisma.user.findUnique({
        where: { email }
    });

    // Cheking credentials
    if (!user) throw CustomError.badRequest('Email not exist');

    const isMatching = await bcrypt.compare(password, user.password);
    if(!isMatching) throw CustomError.badRequest('Password invalid');

    // Updated lastLogin
    const updatedUser = await updatedLastLoginUser(user.id);

    // Generate token
    const token = await JwtAdapter.generateToken({ id: user.id });
    if(!token) throw CustomError.internalServer('Error while creating JWT');

    return {
        user: {
            id: updatedUser.id,
            name: updatedUser.fullName,
            email: updatedUser.email,
            createdAt: updatedUser.createdAt,
            lastLogin: updatedUser.lastLoginAt,
        },
        token: token
    }
}

export const updatedLastLoginUser = async(userId: number) => {

    const now = new Date();
    const offset = -6 * 60;
    const zoneTime = new Date(now.getTime() + offset * 60 * 1000);

    return prisma.user.update({
        where: { id: userId },
        data: { 
            lastLoginAt: zoneTime
        }
    });
}