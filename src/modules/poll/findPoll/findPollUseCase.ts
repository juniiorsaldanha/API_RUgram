import { prisma } from "../../../database/prismaClient";

interface IMenu {
  menu_id: string
}

export class FindPollUseCase {
  async execute({menu_id}: IMenu) {
    const poll = await prisma.menu.findFirst({
      where: {
        id: menu_id,
      },
      select: {
        id: true,
        title: true,
        options: {
          orderBy: {
            text: "asc"
          }
        }
      }
    });

    return poll
  }
}