import { UserInput } from "../interfaces/user.interface";
import { hashPassword } from "../utils/bcrypt.register";
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

    const createUser = await prisma.user.create({
        data: {
            fullName: name,
            email: email,
            password: hashedPassword
        },
    });

    return {
        id: createUser.id,
        email: createUser.email,
        name: createUser.fullName,
        createdAt: createUser.createdAt,
    }
}