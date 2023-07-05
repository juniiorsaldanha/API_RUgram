import { prisma } from "../../../database/prismaClient";

interface IPost {
  user_id: string;
  content: string;
  post_id: string;
}

export class CreateCommentUseCase {
  async execute({ user_id, content, post_id }: IPost) {
    const userExist = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!userExist) {
      throw new Error("User does not exist!");
    }

    const postExist = await prisma.post.findFirst({
      where: {
        id: post_id,
      },
    });

    if (!postExist) {
      throw new Error("Post does not exist!");
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        user_id,
        post_id,
      }
    });

    return {
      comment
    };
  }
}
