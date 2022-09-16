import { Inject, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { usersProvider } from "./users.provider";

@Injectable()
export class UsersService {
  constructor(@Inject("USERS_REPOSITORY") private  usersRepository: typeof User,
              private rolesService: RolesService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto);
    const roleByValue = await this.rolesService.getRoleByValue('user')
    await user.$set('roles', [roleByValue.id])
    user.roles = [roleByValue]
    return user;
  }

  async getAllUsers() {
    const allUsers = await this.usersRepository.findAll({include: {all: true}});
    return allUsers;
  }

  async getUserByEmail(email: string) {
    const userByEmail = await this.usersRepository.findOne({where: {email}, include: {all: true}})
    return userByEmail
  }

  async deleteUser(id: number) {
    return await this.usersRepository.destroy({where: {id}})
  }

}
