import { prisma } from "../../../database/prismaClient";

interface Menu {
  data: {
    title: string;
    options: Option[];
  }
  
}

interface Option {
  text: string;
  votes: number;
}

export class CreatePollUseCase {
  async execute({data}: Menu) {
    const menu = await prisma.menu.create({
      data: {
        title: data.title,
        options: {
          create: data.options.map((option) => ({
            text: option.text,
            votes: 0,
          })),
        },
      },
    });

      return {
        menu
      }
  }
}
