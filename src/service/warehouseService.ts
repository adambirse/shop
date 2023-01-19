import { Operations } from '../domain/operations';
import { WarehouseRepository } from '../domain/port/model/warehouse/warehouseRepository';
import { InMemoryWarehouseRepository } from './adaptor/repository/inMemoryWarehouseRepository';

export class WarehouseService implements Operations {
  private warehouseRepository: WarehouseRepository;

  constructor() {
    this.warehouseRepository = new InMemoryWarehouseRepository();
  }

  createWarehouse(capacity: number): void {
    this.warehouseRepository.create(capacity);
  }
}
