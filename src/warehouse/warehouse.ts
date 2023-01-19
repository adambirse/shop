import { Product } from '../product/product';

export class Warehouse {
  DEFAULT_CAPACITY = 10;
  products: Product[];
  capacity: number;

  constructor(products: Product[], capacity?: number) {
    this.capacity = capacity || this.DEFAULT_CAPACITY;
    if (products.length <= this.capacity) {
      this.products = products;
    } else {
      throw new Error('Capacity exceeded');
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
  add(product: Product) {
    if (this.hasCapacity()) {
      this.products = this.products.concat(product);
    } else {
      throw new Error('Warehouse full');
    }
  }
  private hasCapacity() {
    return this.products.length < this.capacity;
  }
}
