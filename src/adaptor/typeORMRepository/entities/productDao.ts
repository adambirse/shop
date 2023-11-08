import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WarehouseDao } from './warehouseDao';

@Entity('product')
export class ProductDao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  domainId!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  cost!: number;

  @ManyToOne(() => WarehouseDao, (warehouse) => warehouse.products)
  warehouse!: WarehouseDao;

  constructor(domainId: string, name: string, description: string, cost: number) {
    this.domainId = domainId;
    this.name = name;
    this.description = description;
    this.cost = cost;
  }
}