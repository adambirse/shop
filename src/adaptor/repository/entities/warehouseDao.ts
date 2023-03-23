import { Product } from '../../../domain/model/product/product';

export class WarehouseDao {
  id: string;
  products: Product[]; //should not reference model. WIP
  capacity: number;

  constructor(id: string, products: Product[], capacity: number) {
    this.id = id;
    this.products = products;
    this.capacity = capacity;
  }
}
