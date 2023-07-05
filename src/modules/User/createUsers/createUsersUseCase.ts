import { prisma } from "../../../database/prismaClient";

interface IUser {
  name: string;
  email: string;
  urlAvatar: string;
  admin: boolean;
}

export class CreateUserUseCase {
  async execute({ name, email, urlAvatar, admin }: IUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("Username already exist!");
    }

    const user = await prisma.user.create({
      data: {
        name, 
        email, 
        urlAvatar, 
        admin,
      },
    });

    return {
      user
    };
  }
}
