import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('warehouse')
export class WarehouseDao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  domainId!: string;

  @Column()
  capacity!: number;

  constructor(domainId: string, capacity: number) {
    this.domainId = domainId;
    this.capacity = capacity;
  }
}
