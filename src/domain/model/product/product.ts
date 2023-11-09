import { v4 as uuidv4 } from 'uuid';

export class Product {
  id: string;
  name: string;
  cost: number;
  description: string;

  constructor(name: string, cost: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}
