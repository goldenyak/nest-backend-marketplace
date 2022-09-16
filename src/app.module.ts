import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { BloggersModule } from "./bloggers/bloggers.module";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from "./auth/auth.module";
import { AuthController } from "./auth/auth.controller";

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    RolesModule,
    BloggersModule,
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
  ],
  controllers: [],
  providers: []

})
export class AppModule {

}