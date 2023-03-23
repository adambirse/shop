import { Operations } from '../domain/operations';
import { Product } from '../domain/model/product/product';
import { Warehouse } from '../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../domain/repository/warehouseRepository';
import { create } from '../domain/factory/warehouseFactory';
import { ModelNotFound } from '../domain/errors/ModelNotFoundError';

// Should never depend on concrete implementations.
// All imports should be from domain/**
export class WarehouseService implements Operations {
  private warehouseRepository: WarehouseRepository;

  constructor(warehouseRepository: WarehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }
  getWarehouse(id: string): Warehouse {
    const warehouse = this.warehouseRepository.get(id);
    if (!warehouse) {
      throw new ModelNotFound(`Unable to retrieve model with id ${id}`);
    }
    return warehouse;
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
