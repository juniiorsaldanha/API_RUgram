import { Request, Response } from "express";
import { CreatePostUseCase } from "./createPostUseCase";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { content } = request.body;
    const { id_user } = request;

    const createPostUseCase = new CreatePostUseCase();
    const result = await createPostUseCase.execute({
      user_id: id_user, 
      content
    });

    return response.json(result);
  }
}
