import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { BloggersModule } from "./bloggers/bloggers.module";

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    BloggersModule,
    ConfigModule.forRoot({
      envFilePath: ".env"
    })
  ],
  controllers: [],
  providers: []

})
export class AppModule {

}