import { Product } from '../../domain/port/model/product/product';
import { WarehouseService } from '../warehouseService';

export const run = () => {
  console.log('Running simulator');
  const service = new WarehouseService();
  service.createWarehouse(10);
  const product = new Product('Name 1', 1.23, 'Description 1');
  const product2 = new Product('Name 2', 8.23, 'Description 2');

  service.save(product);
  const products = service.save(product2);

  console.log(products);
  console.log('Simulator ended');
};
