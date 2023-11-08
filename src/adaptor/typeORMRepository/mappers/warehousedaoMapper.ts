import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { WarehouseDao } from '../entities/warehouseDao';
import { mapDaoToModel, mapProductToDao } from './productdaoMapper';

//A very simple mapper as Dao and Model are almost identical
export const mapToDao = (warehouse: Warehouse): WarehouseDao => {
  const warehouseDao = new WarehouseDao(warehouse.id, warehouse.capacity);
  warehouseDao.products = warehouse.products?.map(mapProductToDao);
  return warehouseDao;
};

export const mapToModel = (warehouseDao: WarehouseDao): Warehouse => {
  const warehouse = new Warehouse([], warehouseDao.capacity);
  warehouse.id = warehouseDao.domainId;
  warehouse.products = warehouseDao.products?.map(mapDaoToModel) ?? [];
  console.log(warehouse);
  return warehouse;
};
