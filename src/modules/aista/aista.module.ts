import { Module } from '@nestjs/common'
import { JwtStrategy } from 'src/strategy/strategy'
import { AistaController } from "./aista.controller";
import { AistaService } from "./aista.service";

@Module({
  imports: [],
  controllers: [AistaController],
  providers: [AistaService],
})
export class AistaModule {}
