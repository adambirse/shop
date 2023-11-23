import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WarehouseDao } from './warehouseDao';

@Entity('product')
export class ProductDao {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  cost!: number;

  @ManyToOne(() => WarehouseDao, (warehouse) => warehouse.products)
  warehouse!: WarehouseDao;

  constructor(name: string, description: string, cost: number) {
    this.name = name;
    this.description = description;
    this.cost = cost;
  }
}
