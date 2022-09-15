import { User } from "./users.model";

export const usersProvider = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];