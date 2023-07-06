import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUsersUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      }
    });

    if (!userExist) {
      throw new Error("email or password invalid");
    }

    const passwordMatch = await compare(password, userExist.password_hash);

    if (!passwordMatch) {
      throw new Error("email or password invalid");
    }

    const token = sign({ email }, String(process.env.SECRET_PASS), {
      subject: userExist.id,
      expiresIn: "1d",
    });

    return {
      user: userExist,
      token
    };
  }
}
