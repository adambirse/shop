import { Warehouse } from './warehouse';

export interface WarehouseRepository {
  create(capacity: number): Warehouse;
}
