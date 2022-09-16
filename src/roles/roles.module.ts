import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { DatabaseModule } from "../../database/database.module";
import { rolesProvider } from "./roles.provider";
import { usersProvider } from "../users/users.provider";

@Module({
  providers: [RolesService, ...rolesProvider, ...usersProvider],
  controllers: [RolesController],
  imports: [DatabaseModule],
  exports: [RolesService]
})
export class RolesModule {}
