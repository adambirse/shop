import { Warehouse } from '../../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../../domain/repository/warehouseRepository';
import { WarehouseDao } from './entities/warehouseDao';
import { mapToDao, mapToModel } from './mappers/daoMapper';

export class InMemoryWarehouseRepository implements WarehouseRepository {
  private warehouses: WarehouseDao[];

  constructor() {
    this.warehouses = [];
  }
  save(warehouse: Warehouse): Warehouse {
    const dao = mapToDao(warehouse);
    this.warehouses.push(dao);
    return warehouse;
  }

  get(id: string): Warehouse | undefined {
    const foundDao = this.warehouses.find((warehouse) => warehouse.id == id);
    return foundDao ? mapToModel(foundDao) : undefined;
  }
}
