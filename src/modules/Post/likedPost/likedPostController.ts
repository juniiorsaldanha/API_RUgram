import { Request, Response } from "express";
import { LikedPostUseCase } from "./likedPostUseCase";

export class LikedPostController {
  async handle(request: Request, response: Response) {
    const { user_id, post_id } = request.body;

    const likedPostUseCase = new LikedPostUseCase();
    const result = await likedPostUseCase.execute({
      user_id,
      post_id
    });

    return response.json(result);
  }
}
