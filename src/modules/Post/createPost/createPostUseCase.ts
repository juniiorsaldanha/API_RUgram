import { prisma } from "../../../database/prismaClient";

interface IPost {
  user_id: string;
  content: string;
}

export class CreatePostUseCase {
  async execute({ user_id, content }: IPost) {
    const post = await prisma.post.create({
      data: {
        user_id,
        content   
      }
    });

    return {
      post
    };
  }
}
