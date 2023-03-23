import { Operations } from '../domain/operations';
import { Product } from '../domain/model/product/product';
import { Warehouse } from '../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../domain/repository/warehouseRepository';
import { create } from '../domain/factory/warehouseFactory';

// Should never depend on concrete implementations.
// All imports should be from domain/**
export class WarehouseService implements Operations {
  private warehouseRepository: WarehouseRepository;

  constructor(warehouseRepository: WarehouseRepository) {
    this.warehouseRepository = warehouseRepository;
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
