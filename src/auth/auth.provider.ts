import { User } from "../users/users.model";

export const authProvider = [
  {
    provide: 'AUTH_REPOSITORY',
    useValue: User,
  },
];