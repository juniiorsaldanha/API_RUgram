import { Request, Response } from "express";
import { ListPostUseCase } from "./listPostUseCase";

export class ListPostController {
  async handle(request: Request, response: Response) {
    const listPostUseCase = new ListPostUseCase();

    const posts = await listPostUseCase.execute();

    return response.json(posts);
  }
}
