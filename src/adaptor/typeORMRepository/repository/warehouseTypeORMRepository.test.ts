import { DataSource, Repository } from 'typeorm';
import { WarehouseTypeORMRepository } from './warehouseTypeORMRepository';
import { WarehouseDao } from '../entities/warehouseDao';
import { ProductDao } from '../entities/productDao';

let warehouseRepository: WarehouseTypeORMRepository;

const mockRepository: Partial<Record<string, jest.Mock<any, any>>> = {
  findOneOrFail: jest.fn((id: string) => {
    if (id === 'validId') {
      return Promise.resolve(/* Mocked data for findOneOrFail */);
    } else {
      throw new Error('Entity not found');
    }
  }),
};

//TODO make these generic
const mockDataSource: DataSource = {
  getRepository(entityClassOrName: any): Repository<any> {
    if (entityClassOrName === WarehouseDao) {
      return mockRepository as unknown as Repository<WarehouseDao>;
    } else if (entityClassOrName === ProductDao) {
      return mockRepository as unknown as Repository<ProductDao>;
    }
    throw new Error(`Repository for ${entityClassOrName} not found in mock.`);
  },
} as unknown as DataSource;
beforeAll(() => {
  warehouseRepository = new WarehouseTypeORMRepository(mockDataSource);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('warehouseTypeORMRepository', () => {
  it('should throw error if entity not found', async () => {
    await expect(warehouseRepository.get('invalidId')).rejects.toThrow('Entity not found');
  });
});
