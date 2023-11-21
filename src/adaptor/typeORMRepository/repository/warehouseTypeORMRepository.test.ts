import { DataSource, Repository } from 'typeorm';
import { WarehouseTypeORMRepository } from './warehouseTypeORMRepository';
import { WarehouseDao } from '../entities/warehouseDao';

let warehouseRepository: WarehouseTypeORMRepository;

const warehouseDao: WarehouseDao = {
  id: 'validId',
  capacity: 12,
  products: [],
};

const mockRepository: Partial<Record<string, jest.Mock<any, any>>> = {
  findOneOrFail: jest.fn(async (options: any) => {
    const {
      where: { id },
    } = options;

    if (id === 'validId') {
      return Promise.resolve(warehouseDao);
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

  it('should return the model if found', async () => {
    const result = await warehouseRepository.get('validId');
    expect(result).toMatchObject({
      DEFAULT_CAPACITY: 10,
      capacity: 12,
      id: 'validId',
      products: [],
    });
  });
});
