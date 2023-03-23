import { Operations } from '../operations';
import { Product } from '../model/product/product';
import { Warehouse } from '../model/warehouse/warehouse';
import { WarehouseRepository } from '../repository/warehouseRepository';
import { create } from '../factory/warehouseFactory';
import { InMemoryWarehouseRepository } from '../../adaptor/repository/inMemoryWarehouseRepository';

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
