import { Product } from './model/product/product';
import { Warehouse } from './model/warehouse/warehouse';

export interface Operations {
  createWarehouse(capacity: number): Warehouse;
  getWarehouse(id: string): Warehouse | undefined;
  save(id: string, product: Product): Product[];
}
