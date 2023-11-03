import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { WarehouseDao } from './entities/warehouseDao';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [WarehouseDao],
  subscribers: [],
  migrations: [],
});

export const initialiseDB = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('DB started.');
    })
    .catch((error) => console.log(error));
};
