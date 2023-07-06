import { Request, Response } from "express";
import { CreateCommentUseCase } from "./createCommentUseCase";

export class CreateCommentController {
  async handle(request: Request, response: Response) {
    const { content, post_id } = request.body;
    const { id_user } = request;

    const createCommentUseCase = new CreateCommentUseCase();
    const result = await createCommentUseCase.execute({
      user_id: id_user, 
      content,
      post_id
    });

    return response.json(result);
  }
}
