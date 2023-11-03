import { Operations } from '../domain/operations';
import { Warehouse } from '../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../domain/repository/warehouseRepository';
import { create } from '../domain/factory/warehouseFactory';
import { ModelNotFound } from '../domain/errors/ModelNotFoundError';
import { AddProductRequest } from '../domain/model/AddProduct';

// Should never depend on concrete implementations.
// All imports should be from domain/**
export class WarehouseService implements Operations {
  private warehouseRepository: WarehouseRepository;

  constructor(warehouseRepository: WarehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }
  async addProduct(warehouseId: string, request: AddProductRequest): Promise<Warehouse> {
    const warehouse = await this.getWarehouse(warehouseId);
    warehouse.add({
      name: request.name,
      description: request.description,
      cost: request.cost,
    });
    return this.warehouseRepository.save(warehouse);
  }

  async getWarehouse(id: string): Promise<Warehouse> {
    try {
      const warehouse = await this.warehouseRepository.get(id);
      return warehouse;
    } catch (e) {
      console.log(`Unable to retrieve model with id ${id}`);
      throw new ModelNotFound(`Unable to retrieve model with id - ${id}`);
    }
  }

  async createWarehouse(capacity: number): Promise<Warehouse> {
    const warehouse = create(capacity);
    return await this.warehouseRepository.save(warehouse);
  }
}
