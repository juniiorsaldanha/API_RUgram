import { Request, Response } from "express";
import { DeleteCommentUseCase } from "./deleteCommentUseCase";

export class DeleteCommentController {
  async handle(request: Request, response: Response) {
    const { comment_id } = request.body;

    const deleteCommentUseCase = new DeleteCommentUseCase();
    const result = await deleteCommentUseCase.execute({
      comment_id
    });

    return response.json(result);
  }
}
