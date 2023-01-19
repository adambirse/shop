import { WarehouseService } from '../warehouseService';

export const run = () => {
  console.log('Running simulator');
  const service = new WarehouseService();
  service.createWarehouse(10);
  console.log('Simulator ended');
};
