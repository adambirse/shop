import { Warehouse } from '../../../domain/port/model/warehouse/warehouse';
import { WarehouseRepository } from '../../../domain/port/model/warehouse/warehouseRepository';

export class InMemoryWarehouseRepository implements WarehouseRepository {
  create(capacity: number): Warehouse {
    const warehouse = new Warehouse([], capacity);
    return warehouse;
  }
}
