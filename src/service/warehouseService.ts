import { Operations } from '../domain/operations';
import { Product } from '../domain/port/model/product/product';
import { WarehouseRepository } from '../domain/port/model/warehouse/warehouseRepository';
import { InMemoryWarehouseRepository } from './adaptor/repository/inMemoryWarehouseRepository';

export class WarehouseService implements Operations {
  private warehouseRepository: WarehouseRepository;

  constructor() {
    this.warehouseRepository = new InMemoryWarehouseRepository();
  }
  save(product: Product): Product[] {
    this.warehouseRepository.add(product);
    return this.warehouseRepository.getAll();
  }

  createWarehouse(capacity: number): void {
    this.warehouseRepository.create(capacity);
  }
}
