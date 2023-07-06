import { Request, Response } from "express";
import { FindPollUseCase } from "./findPollUseCase";

export class FindPollController {
  async handle(request: Request, response: Response) {
    const findPollUseCase = new FindPollUseCase();

    const {menu_id} = request.body

    const poll = await findPollUseCase.execute({
      menu_id
    });

    return response.json(poll);
  }
}
