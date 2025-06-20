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
        throw CustomError.badRequest('El correo electronico ya se encuentra registrado')
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