import { Request, Response } from "express";
import { VotePollUseCase } from "./votePollUseCase";

export class VotePollController {
  async handle(request: Request, response: Response) {
    const { option_id, menu_id } = request.body;
    const votePollUseCase = new VotePollUseCase();

    const poll = await votePollUseCase.execute({
      option_id,
      menu_id
    });

    return response.json(poll);
  }
}
