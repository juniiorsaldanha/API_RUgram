import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUsersUseCase";

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { username, email, password, urlAvatar, admin } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      username,
      email,
      password,
      urlAvatar,
      admin,
    });

    return response.json(result);
  }
}
