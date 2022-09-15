import { Module } from '@nestjs/common';
import { BloggersController } from './bloggers.controller';
import { BloggersService } from './bloggers.service';
import { DatabaseModule } from "../../database/database.module";

@Module({
  controllers: [BloggersController],
  providers: [BloggersService],
  imports: [DatabaseModule]
})
export class BloggersModule {}
