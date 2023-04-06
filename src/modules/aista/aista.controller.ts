import { Body, Controller, Post } from "@nestjs/common";
import { AistaService } from "./aista.service";

@Controller("aista")
export class AistaController {
  constructor(private readonly aistaService: AistaService) {}
  @Post("create-bot")
  async createBot(@Body() body: any): Promise<any> {
    console.log("body", body);
    return await this.aistaService.createBot(body);
  }
}
