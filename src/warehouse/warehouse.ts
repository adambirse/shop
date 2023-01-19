export class Warehouse {
  DEFAULT_CAPACITY = 10;
  products: string[];
  capacity: number;

  constructor(products: string[], capacity?: number) {
    this.capacity = capacity || this.DEFAULT_CAPACITY;
    if (products.length <= this.capacity) {
      this.products = products;
    } else {
      throw new Error('Capacity exceeded');
    }
  }

  getProducts(): string[] {
    return this.products;
  }
  add(product: string) {
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
