import { prisma } from "../../../database/prismaClient";

interface ILike {
  user_id: string
  post_id: string
}

export class LikedPostUseCase {
  async execute({ user_id, post_id }: ILike) {
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

    const liked = await prisma.like.findFirst({
      where: {
        user_id,
        post_id
      }
    });

    if (liked) {
      await prisma.like.delete({
        where: {
          id: liked.id
        }
      })

      await prisma.post.update({
        where: {
          id: post_id
        },
        data: {
          likes: postExist.likes-1
        }
      })
    } else {
      await prisma.like.create({
        data: {
          user_id,
          post_id,
        }
      });
  
      await prisma.post.update({
        where: {
          id: post_id
        },
        data: {
          likes: postExist.likes+1
        }
      })
    }

    return {};
  }
}
