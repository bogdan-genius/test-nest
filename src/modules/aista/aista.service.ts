import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AistaService {
  async createBot(body: any): Promise<any> {
		console.log(body);
    const data = await axios.post(
      "https://tiger-dan.de.aista.com/magic/system/openai/create-bot",
      body,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFuIiwicm9sZSI6InJvb3QiLCJuYmYiOjE2ODA3NzY1NzQsImV4cCI6MTY4MDc4Mzc3NCwiaWF0IjoxNjgwNzc2NTc0fQ.1e8iJ29jMdq2QO5pfAXT0t609TF-xlb5h6j6xVebpXU",
        },
      }
    ).catch((err) => {console.log(err)});
    console.log(data);
    return data;
  }
}
