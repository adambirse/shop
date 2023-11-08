import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { WarehouseDao } from './entities/warehouseDao';
import { ProductDao } from './entities/productDao';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [WarehouseDao, ProductDao],
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
