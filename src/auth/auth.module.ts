import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { DatabaseModule } from "../../database/database.module";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    DatabaseModule,
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
