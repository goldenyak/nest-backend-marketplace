import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from "../../database/database.module";
import { usersProvider } from "./users.provider";
import { RolesModule } from "../roles/roles.module";
import { UserRoles } from "../roles/user-roles.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProvider],
  imports: [DatabaseModule, UserRoles, RolesModule, forwardRef(() => AuthModule)],
  exports: [UsersService]
})
export class UsersModule {}
