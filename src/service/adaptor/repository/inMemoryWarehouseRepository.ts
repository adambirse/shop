import { Product } from '../../../domain/port/model/product/product';
import { Warehouse } from '../../../domain/port/model/warehouse/warehouse';
import { WarehouseRepository } from '../../../domain/port/model/warehouse/warehouseRepository';

export class InMemoryWarehouseRepository implements WarehouseRepository {
  private warehouse;
  add(product: Product) {
    this.warehouse.add(product);
  }
  getAll(): Product[] {
    return this.warehouse.getProducts();
  }
  create(capacity: number): Warehouse {
    this.warehouse = new Warehouse([], capacity);
    return this.warehouse;
  }
}
