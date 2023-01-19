import { Product } from './port/model/product/product';

export interface Operations {
  createWarehouse(capacity: number): void;
  save(product: Product): Product[];
}
