import { Product } from '../product/product';
import { Warehouse } from './warehouse';

export interface WarehouseRepository {
  create(capacity: number): Warehouse;
  add(product: Product);
  getAll(): Product[];
}
