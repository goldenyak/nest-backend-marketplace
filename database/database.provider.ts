import { Sequelize } from "sequelize-typescript";
import { User } from "../src/users/users.model";
import { Blogger } from "../src/bloggers/bloggers.model";



export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([User, Blogger]);
      try {
        await sequelize.sync()
        console.log('Соединение с БД было успешно установлено')
      } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
      }
      return sequelize;
    },
  },
];