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
      include: {
        options: true,
      },
    });

    return poll
  }
}