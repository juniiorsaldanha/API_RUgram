import { Request, Response } from "express";
import { CreatePollUseCase } from "./createPollUseCase";

export class CreatePollController {
  async handle(request: Request, response: Response){
    const { title, options } = request.body
    

    const data = {
      title, 
      options
    }

    const createPollController = new CreatePollUseCase()
    const result = await createPollController.execute({
      data
    });

    return response.json(result)
  }
}