import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanRoleDto } from "./dto/ban-role.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags('Users')
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({summary: 'Creating new user'})
  @ApiResponse({status: 200, type: User})
  @UsePipes(ValidationPipe)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  // @UseGuards(JwtAuthGuard)
  @Roles('user')
  @UseGuards(RolesGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers()
  }

  @ApiOperation({summary: 'Delete user by ID'})
  @ApiResponse({status: 200, description: 'User is deleted'})
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id)
  }

  @ApiOperation({summary: 'Set role for user'})
  @ApiResponse({status: 200})
  // @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/addrole')
  addRole(@Body() roleDto: AddRoleDto) {
    return this.usersService.addRole(roleDto);
  }

  @ApiOperation({summary: 'Ban role for user'})
  @ApiResponse({status: 200})
  // @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/ban')
  banRole(@Body() banRoleDto: BanRoleDto) {
    return this.usersService.banRole(banRoleDto);
  }
}
