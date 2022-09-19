import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { usersProvider } from "./users.provider";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanRoleDto } from "./dto/ban-role.dto";

@Injectable()
export class UsersService {
  constructor(@Inject("USERS_REPOSITORY") private usersRepository: typeof User,
              private rolesService: RolesService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto);
    const roleByValue = await this.rolesService.getRoleByValue("user");
    await user.$set("roles", [roleByValue.id]);
    user.roles = [roleByValue];
    return user;
  }

  async getAllUsers() {
    const allUsers = await this.usersRepository.findAll({ include: { all: true } });
    return allUsers;
  }

  async getUserByEmail(email: string) {
    const userByEmail = await this.usersRepository.findOne({ where: { email: email }, include: { all: true } });
    return userByEmail;
  }

  async deleteUser(id: number) {
    return await this.usersRepository.destroy({ where: { id } });
  }

  async addRole(roleDto: AddRoleDto) {
    const user = await this.usersRepository.findByPk(roleDto.userId);
    const role = await this.rolesService.getRoleByValue(roleDto.value);
    if(user && role) {
      user.$add('role', role.id)
      return roleDto;
    }
    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
  }

  async banRole(banRoleDto: BanRoleDto) {
    const user = await this.usersRepository.findByPk(banRoleDto.userId);
    if(!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)
    }
    user.banned = true;
    user.banReason = banRoleDto.banReason;
    await user.save();
    return user;
  }

}
