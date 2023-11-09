import { Repository } from 'typeorm';
import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../../../domain/repository/warehouseRepository';
import { AppDataSource } from '../data-source';
import { WarehouseDao } from '../entities/warehouseDao';
import { mapToDao, mapToModel } from '../mappers/warehousedaoMapper';

export class WarehouseTypeORMRepository implements WarehouseRepository {
  async save(warehouse: Warehouse): Promise<Warehouse> {
    const daoToSave = mapToDao(warehouse);
    const warehouseRepository = this.getRepository();
    try {
      const existingWarehouse = await this.getDao(warehouse.id);
      daoToSave.id = existingWarehouse.id;
    } catch {
      console.log('foo');
    }

    const createdWarehouse = await warehouseRepository.save(daoToSave);
    return mapToModel(createdWarehouse);
  }

  async get(id: string): Promise<Warehouse> {
    const dao = this.getDao(id);
    return mapToModel(await dao);
  }

  private getDao(id: string): Promise<WarehouseDao> {
    return this.getRepository()
      .findOneOrFail({
        where: {
          domainId: id,
        },
        relations: { products: true },
      })
      .then((dao) => {
        return dao;
      })
      .catch((e) => {
        console.log('Error finding warehouse', e);
        throw new Error(e);
      });
  }

  private getRepository(): Repository<WarehouseDao> {
    return AppDataSource.getRepository(WarehouseDao);
  }
}
