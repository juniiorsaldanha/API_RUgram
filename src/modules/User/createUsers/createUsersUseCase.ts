import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface IUser {
  username: string;
  email: string;
  password: string;
  urlAvatar: string;
  admin: boolean;
}

export class CreateUserUseCase {
  async execute({ username, email, password, urlAvatar, admin }: IUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("Username already exist!");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email, 
        password_hash: hashPassword,
        urlAvatar, 
        admin,
      },
    });

    return {
      user
    };
  }
}
