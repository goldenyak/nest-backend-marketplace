import { Role } from "./roles.model";

export const rolesProvider = [
  {
    provide: 'ROLES_REPOSITORY',
    useValue: Role,
  },
];