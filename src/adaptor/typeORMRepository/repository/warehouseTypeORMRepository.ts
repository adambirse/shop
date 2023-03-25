import { Repository } from 'typeorm';
import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { WarehouseRepository } from '../../../domain/repository/warehouseRepository';
import { AppDataSource } from '../data-source';
import { WarehouseDao } from '../entities/warehouseDao';
import { mapToDao, mapToModel } from '../mappers/daoMapper';

export class WarehouseTypeORMRepository implements WarehouseRepository {
  async save(warehouse: Warehouse): Promise<Warehouse> {
    const warehouseRepository = this.getRepository();
    const createdWarehouse = await warehouseRepository.save(mapToDao(warehouse));
    return mapToModel(createdWarehouse);
  }

  get(id: string): Promise<Warehouse> {
    return this.getRepository()
      .findOneOrFail({
        where: {
          domainId: id,
        },
      })
      .then((dao) => mapToModel(dao))
      .catch((e) => {
        console.log('Error finding warehouse', e);
        throw new Error(e);
      });
  }

  private getRepository(): Repository<WarehouseDao> {
    return AppDataSource.getRepository(WarehouseDao);
  }
}
