import { DataSource, Repository } from 'typeorm';
import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../../../domain/repository/warehouseRepository';
import { WarehouseDao } from '../entities/warehouseDao';
import { mapToDao, mapToModel } from '../mappers/warehousedaoMapper';

export class WarehouseTypeORMRepository implements WarehouseRepository {
  constructor(readonly dataSource: DataSource) {}

  async save(warehouse: Warehouse): Promise<Warehouse> {
    const daoToSave = mapToDao(warehouse);
    const warehouseRepository = this.getRepository();

    const savedWarehouse = await (warehouse.id === undefined
      ? warehouseRepository.save(daoToSave)
      : warehouseRepository.save({ ...daoToSave, id: daoToSave.id }));

    return mapToModel(savedWarehouse);
  }

  async get(id: string): Promise<Warehouse> {
    const dao = await this.getDao(id);
    return mapToModel(dao);
  }

  private async getDao(id: string): Promise<WarehouseDao> {
    try {
      const dao = await this.getRepository().findOneOrFail({
        where: { id },
        relations: { products: true },
      });
      return dao;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Error finding warehouse', error);
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred.');
      }
    }
  }

  private getRepository(): Repository<WarehouseDao> {
    return this.dataSource.getRepository(WarehouseDao);
  }
}
