import { Request, Response } from "express";
import { AuthenticateUsersUseCase } from "./authenticateUsersUseCase";

export class AuthenticateUsersController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUsersUseCase = new AuthenticateUsersUseCase();
    const result = await authenticateUsersUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
