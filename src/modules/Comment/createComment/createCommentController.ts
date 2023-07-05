import { Request, Response } from "express";
import { CreateCommentUseCase } from "./createCommentUseCase";

export class CreateCommentController {
  async handle(request: Request, response: Response) {
    const { user_id, content, post_id } = request.body;

    const createCommentUseCase = new CreateCommentUseCase();
    const result = await createCommentUseCase.execute({
      user_id, 
      content,
      post_id
    });

    return response.json(result);
  }
}
