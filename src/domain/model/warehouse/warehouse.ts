import { Product } from '../product/product';
import { StorageError } from '../../errors/warehouse/StorageError';
import { v4 as uuidv4 } from 'uuid';

export class Warehouse {
  id: string;
  DEFAULT_CAPACITY = 10;
  products: Product[];
  capacity: number;

  constructor(products: Product[], capacity?: number) {
    this.id = uuidv4();
    this.capacity = capacity || this.DEFAULT_CAPACITY;
    if (products.length <= this.capacity) {
      this.products = products;
    } else {
      throw new StorageError('Capacity exceeded');
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
  add(product: Product) {
    if (this.hasCapacity()) {
      this.products = this.products.concat(product);
    } else {
      throw new StorageError('Warehouse full');
    }
  }
  private hasCapacity() {
    return this.products.length < this.capacity;
  }
}
