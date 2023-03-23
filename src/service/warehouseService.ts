import { Operations } from '../domain/operations';
import { Product } from '../domain/port/model/product/product';
import { Warehouse } from '../domain/port/model/warehouse/warehouse';
import { WarehouseRepository } from '../domain/port/model/warehouse/warehouseRepository';
import { create } from '../factory/warehouseFactory';
import { InMemoryWarehouseRepository } from './adaptor/repository/inMemoryWarehouseRepository';

export class WarehouseService implements Operations {
  private warehouseRepository: WarehouseRepository;

  constructor() {
    this.warehouseRepository = new InMemoryWarehouseRepository();
  }
  getWarehouse(id: string): Warehouse | undefined {
    return this.warehouseRepository.get(id);
  }
  save(id: string, product: Product): Product[] {
    const warehouse = this.warehouseRepository.get(id);
    if (warehouse) {
      warehouse.add(product);
      this.warehouseRepository.save(warehouse);
      return warehouse.getProducts();
    }

    return [];
  }

  createWarehouse(capacity: number): Warehouse {
    const warehouse = create(capacity);
    return this.warehouseRepository.save(warehouse);
  }
}
