import { AddProductRequest } from './model/AddProduct';
import { Warehouse } from './model/warehouse/warehouse';

// An interface describing the domain operations this business domain supports.
// These should be as close to the domain language used by the SMEs as possible
// as they represent concepts the business defines, rather than developers.
// They will be implemented by sone or more Services
export interface Operations {
  createWarehouse(capacity: number): Promise<Warehouse>;
  getWarehouse(id: string): Promise<Warehouse>;
  addProduct(warehouseId: string, request: AddProductRequest): Promise<Warehouse>;
}
