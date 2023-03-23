import { Warehouse } from '../../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../../domain/repository/warehouseRepository';

export class InMemoryWarehouseRepository implements WarehouseRepository {
  private warehouses: Warehouse[];

  constructor() {
    this.warehouses = [];
  }
  save(warehouse: Warehouse): Warehouse {
    this.warehouses.push(warehouse);
    return warehouse;
  }

  get(id: string): Warehouse | undefined {
    return this.warehouses.find((warehouse) => warehouse.id == id);
  }
}
