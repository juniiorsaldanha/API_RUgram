import { Router } from "express";

import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUsersController } from './modules/account/authenticateUser/authenticateUsersController';
import { CreateUsersController } from "./modules/User/createUsers/createUsersController";
import { CreatePostController } from './modules/Post/createPost/createPostController';
import { LikedPostController } from './modules/Post/likedPost/likedPostController'
import { ListPostController } from './modules/Post/listPost/listPostController';
import { CreateCommentController } from './modules/Comment/createComment/createCommentController'
import { DeleteCommentController } from './modules/Comment/deleteComment/deleteCommentController';
import { CreatePollController } from './modules/poll/createPoll/createPollController'
import { FindPollController } from './modules/poll/findPoll/findPollController'
import { VotePollController } from './modules/poll/votePoll/votePollController'

const routes = Router();

const authenticateUsersController = new AuthenticateUsersController();
const createUsersController = new CreateUsersController();
const createPostController = new CreatePostController();
const likedPostController = new LikedPostController();
const listPostController = new ListPostController();
const createCommentController = new CreateCommentController();
const deleteCommentController  = new DeleteCommentController();
const createPollController = new CreatePollController();
const findPollController = new FindPollController()
const votePollController = new VotePollController()

routes.post("/session", authenticateUsersController.handle);

routes.post("/users", createUsersController.handle);
routes.post("/post", ensureAuthenticateUser, createPostController.handle);

routes.get("/post", ensureAuthenticateUser, listPostController.handle)

routes.post("/post/liked", ensureAuthenticateUser, likedPostController.handle);
routes.post("/post/comment", ensureAuthenticateUser, createCommentController.handle);

routes.delete("/post/comment", ensureAuthenticateUser, deleteCommentController.handle);

routes.post("/poll", ensureAuthenticateUser, createPollController.handle)
routes.get("/poll", ensureAuthenticateUser, findPollController.handle)
routes.post("/poll/vote", ensureAuthenticateUser, votePollController.handle)

export { routes };