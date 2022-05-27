import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "a4f91b09-6abf-43aa-860c-2bd98907477c",
    },
    data: {
      duration: 250,
      description: "Curso de Nodejs excelente ministrado pela dani leão",
    },
  });

  console.log(result);
}

main();
