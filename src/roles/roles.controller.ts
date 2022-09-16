import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Role } from "./roles.model";

@ApiTags('User roles')
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {
  }

  @ApiOperation({summary: 'Creating new role for user'})
  @ApiResponse({status: 200, type: Role})
  @Post()
  async createRole(@Body() roleDto: CreateRoleDto) {
    const role = await this.rolesService.createRole(roleDto);
    return role;
  }

  @Get('/:value')
  async getRoleByValue(@Param('value') value: string) {
    const roleByValue = await this.rolesService.getRoleByValue(value);
    return roleByValue;
  }
}
