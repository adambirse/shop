import { Product } from './model/product/product';
import { Warehouse } from './model/warehouse/warehouse';

// An interface describing the domain operations this business domain supports.
// These should be as close to the domain language used by the SMEs as possible
// as they represent concepts the business defines, rather than developers.
// They will be implemented by sone or more Services
export interface Operations {
  createWarehouse(capacity: number): Warehouse;
  getWarehouse(id: string): Warehouse | undefined;
  save(id: string, product: Product): Product[];
}
