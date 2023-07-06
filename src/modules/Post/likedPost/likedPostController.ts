import { Request, Response } from "express";
import { LikedPostUseCase } from "./likedPostUseCase";

export class LikedPostController {
  async handle(request: Request, response: Response) {
    const { post_id } = request.body;
    const { id_user } = request;

    const likedPostUseCase = new LikedPostUseCase();
    const result = await likedPostUseCase.execute({
      user_id: id_user,
      post_id
    });

    return response.json(result);
  }
}
