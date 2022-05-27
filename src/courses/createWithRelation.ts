import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.courses.create({
        data: {
            name: "Curso de Java",
            description: "Curso excelente de Java",
            duration: 200,
            teacher: {
                connectOrCreate: {
                    where: {
                        id: "dbbc937c-8a83-4609-98b1-f586d0a51517"
                    }
                }
            }
        }
    })

}


main();