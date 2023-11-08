import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { mapToDao } from './warehousedaoMapper';

describe('warehouse mapper', () => {
  
  const warehouse: Warehouse = new Warehouse([]);

  it('should map to Dao', () => {
    expect(mapToDao(warehouse)).toBeDefined();
  });
});
