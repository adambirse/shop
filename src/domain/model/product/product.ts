export class Product {
  id!: string;
  name: string;
  cost: number;
  description: string;

  constructor(name: string, cost: number, description: string) {
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}
