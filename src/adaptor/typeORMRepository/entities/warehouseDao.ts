import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('warehouse')
export class WarehouseDao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  domainId!: string;

  @Column()
  capacity!: number;
}
