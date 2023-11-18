import { AppDataSource } from '../adaptor/typeORMRepository/data-source';
import { WarehouseTypeORMRepository } from '../adaptor/typeORMRepository/repository/warehouseTypeORMRepository';
import { Operations } from '../domain/operations';
import { WarehouseService } from './warehouseService';

export interface ServiceConfiguration {
  warehouseService: Operations;
}

let service: ServiceConfiguration;

export const serviceConfiguration = (): ServiceConfiguration => {
  const warehouseRepository = new WarehouseTypeORMRepository(AppDataSource);
  if (!service) {
    service = {
      warehouseService: new WarehouseService(warehouseRepository),
    };
  }
  return service;
};
