import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    RolesModule,
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
  ],
  controllers: [],
  providers: []

})
export class AppModule {

}