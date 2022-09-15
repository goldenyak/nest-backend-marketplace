import { Sequelize } from "sequelize-typescript";



export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        // dialect: 'postgres',
        // host: '127.0.0.1',
        // port: 5432,
        // username: 'postgres',
        // password: 'root',
        // database: 'nest-marketplace',

        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([]);
      // await sequelize.sync();
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