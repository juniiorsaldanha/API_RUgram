import { prisma } from "../../../database/prismaClient";

interface IPol {
  option_id: string
  menu_id: string
}

export class VotePollUseCase {
  async execute({option_id, menu_id}: IPol) {
    const poll = await prisma.option.update({
      where: {
        id: option_id
      },
      data: {
        votes: {
          increment: 1,
        },
        menu: {
          connect: {
            id: menu_id,
          },
        },
      }
    });

    return poll
  }
}