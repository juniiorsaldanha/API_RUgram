import { Router } from "express";

import { CreateUsersController } from "./modules/User/createUsers/createUsersController";
import { CreatePostController } from './modules/Post/createPost/createPostController';
import { LikedPostController } from './modules/Post/likedPost/likedPostController'
import { ListPostController } from './modules/Post/listPost/listPostController';
import { CreateCommentController } from './modules/Comment/createComment/createCommentController'
import { DeleteCommentController } from './modules/Comment/deleteComment/deleteCommentController';

const routes = Router();

const createUsersController = new CreateUsersController();
const createPostController = new CreatePostController();
const likedPostController = new LikedPostController();
const listPostController = new ListPostController();
const createCommentController = new CreateCommentController();
const deleteCommentController  = new DeleteCommentController();

routes.post("/users", createUsersController.handle);
routes.post("/post", createPostController.handle);

routes.get("/post", listPostController.handle)

routes.post("/post/liked", likedPostController.handle);
routes.post("/post/comment", createCommentController.handle);

routes.delete("/post/comment", deleteCommentController.handle);

export { routes };