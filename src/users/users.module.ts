import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from "../../database/database.module";
import { usersProvider } from "./users.provider";

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProvider],
  imports: [DatabaseModule]
})
export class UsersModule {}
