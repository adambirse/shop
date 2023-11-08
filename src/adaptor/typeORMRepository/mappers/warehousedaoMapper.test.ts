import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { mapToDao } from './warehousedaoMapper';

describe('warehouse mapper', () => {
  const warehouse: Warehouse = new Warehouse([]);

  it('should map to Dao without any products', () => {
    const warehouseDao = mapToDao(warehouse);
    expect(warehouseDao.domainId).toEqual(warehouse.id);
    expect(warehouseDao.capacity).toEqual(warehouse.capacity);
    expect(warehouseDao.products).toEqual([]);
  });
  it('should not map database id', () => {
    const warehouseDao = mapToDao(warehouse);
    expect(warehouseDao.id).toBeUndefined;
  });
});
