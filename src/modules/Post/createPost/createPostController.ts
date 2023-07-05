import { Request, Response } from "express";
import { CreatePostUseCase } from "./createPostUseCase";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { user_id, content } = request.body;

    const createPostUseCase = new CreatePostUseCase();
    const result = await createPostUseCase.execute({
      user_id, 
      content
    });

    return response.json(result);
  }
}
