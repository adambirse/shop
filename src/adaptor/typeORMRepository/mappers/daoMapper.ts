import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { WarehouseDao } from '../entities/warehouseDao';

//A very simple mapper as Dao and Model are almost identical
export const mapToDao = (warehouse: Warehouse): WarehouseDao => {
  return new WarehouseDao(warehouse.id, warehouse.capacity);
};

export const mapToModel = (warehouseDao: WarehouseDao): Warehouse => {
  const warehouse = new Warehouse([], warehouseDao.capacity);
  warehouse.id = warehouseDao.domainId;
  return warehouse;
};
