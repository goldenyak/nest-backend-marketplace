import { Inject, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@Inject("USERS_REPOSITORY") private usersRepository: typeof User) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const allUsers = await this.usersRepository.findAll();
    return allUsers;
  }

}
