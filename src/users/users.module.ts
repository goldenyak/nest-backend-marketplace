import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from "../../database/database.module";
import { usersProvider } from "./users.provider";
import { RolesModule } from "../roles/roles.module";
import { UserRoles } from "../roles/user-roles.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProvider],
  imports: [DatabaseModule, UserRoles, RolesModule],
  exports: [UsersService]
})
export class UsersModule {}
