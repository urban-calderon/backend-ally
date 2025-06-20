import { prisma } from "../config/prisma";

export const getCountries = async() => {

    const countries = await prisma.country.findMany();

    return countries;
}