import { Warehouse } from '../model/warehouse/warehouse';

export interface WarehouseRepository {
  save(warehouse: Warehouse): Warehouse;
  get(id: string): Warehouse | undefined;
}
