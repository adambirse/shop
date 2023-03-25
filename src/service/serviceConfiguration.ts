import { WarehouseTypeORMRepository } from '../adaptor/typeORMRepository/repository/warehouseTypeORMRepository';
import { WarehouseService } from './warehouseService';

interface ServiceConfiguration {
  warehouseService: WarehouseService;
}

let service: ServiceConfiguration;

export const serviceConfiguration = (): ServiceConfiguration => {
  const warehouseRepository = new WarehouseTypeORMRepository();
  if (!service) {
    service = {
      warehouseService: new WarehouseService(warehouseRepository),
    };
  }
  return service;
};
