export class Warehouse {
  products: string[];

  constructor(products: string[]) {
    this.products = products;
  }

  getProducts(): string[] {
    return this.products;
  }
}
