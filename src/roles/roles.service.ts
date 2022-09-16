import { Inject, Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
  constructor(@Inject("ROLES_REPOSITORY") private rolesRepository: typeof Role) {
  }

  async createRole(dto: CreateRoleDto) {
    const role = await this.rolesRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const roleByValue = await this.rolesRepository.findOne({where: { value }});
    return roleByValue;
  }
}
