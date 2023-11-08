import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDao } from './productDao';

@Entity('warehouse')
export class WarehouseDao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  domainId!: string;

  @Column()
  capacity!: number;

  @OneToMany(() => ProductDao, (ProductDao) => ProductDao.warehouse, {
    cascade: true,
  })
  products!: ProductDao[] | undefined;

  constructor(domainId: string, capacity: number) {
    this.domainId = domainId;
    this.capacity = capacity;
  }
}
