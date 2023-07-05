import { prisma } from "../../../database/prismaClient";

interface IComment {
  comment_id: string;
}

export class DeleteCommentUseCase {
  async execute({ comment_id }:IComment) {
    const comment = await prisma.comment.update({
      where: {
        id: comment_id
      },
      data: {
        delete_at: new Date(),
      }
    });

    return comment;
  }
}
