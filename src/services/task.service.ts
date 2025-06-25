import { prisma } from "../config/prisma";

export const getTasks = async() => {

    const tasks = await prisma.todo.findMany();

    return tasks;
}