import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDao } from './productDao';

@Entity('warehouse')
export class WarehouseDao {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  capacity!: number;

  @OneToMany(() => ProductDao, (ProductDao) => ProductDao.warehouse, {
    cascade: true,
  })
  products!: ProductDao[] | undefined;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
