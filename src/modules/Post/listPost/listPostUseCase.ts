import { prisma } from "../../../database/prismaClient";

export class ListPostUseCase {
  async execute() {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: {
          select: {
            username: true,
            urlAvatar: true,
            admin: true,
          }
        },
        Comment: {
          where: {
            delete_at: null,
          },
          select: {
            id: true,
            content: true,
            created_at: true,
            user: {
              select: {
                username: true,
                urlAvatar: true,
                admin: true
              }
            }
          }
        }
      }
    });

    return posts;
  }
}
