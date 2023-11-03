import { WarehouseRepository } from '../domain/repository/warehouseRepository';
import { WarehouseService } from './warehouseService';
import { create } from '../domain/factory/warehouseFactory';
import { Warehouse } from '../domain/model/warehouse/warehouse';
import { ModelNotFound } from '../domain/errors/ModelNotFoundError';

describe('Warehouse service', () => {
  const warehouse = create(2);
  let warehouseService: WarehouseService;

  let warehouseRepository: WarehouseRepository;

  beforeEach(() => {
    warehouseRepository = {
      get: jest.fn(() => Promise.resolve(warehouse)),
      save: jest.fn(() => Promise.resolve(warehouse)),
    };
    warehouseService = new WarehouseService(warehouseRepository);
  });

  it('Create warehouse success', async () => {
    const createdWarehouse = await warehouseService.createWarehouse(2);
    expect(createdWarehouse).toMatchObject<Warehouse>(warehouse);
  });

  it('get warehouse success', async () => {
    warehouseRepository = {
      get: jest.fn(() => Promise.resolve(warehouse)),
      save: jest.fn(() => Promise.resolve(warehouse)),
    };
    const retrievedWarehouse = await warehouseService.getWarehouse('found');
    expect(retrievedWarehouse).toMatchObject<Warehouse>(warehouse);
  });
  it('get warehouse failure', async () => {
    warehouseRepository = {
      get: jest.fn(() => Promise.reject(new ModelNotFound('error message'))),
      save: jest.fn(() => Promise.resolve(warehouse)),
    };
    warehouseService = new WarehouseService(warehouseRepository);
    await expect(warehouseService.getWarehouse('unknown id')).rejects.toEqual(
      expect.objectContaining({ message: 'Unable to retrieve model with id - unknown id' }),
    );
  });
  it('can add product to warehouse', async () => {
    const spy = jest.spyOn(warehouseRepository, 'save');

    await warehouseService.addProduct('id', {
      name: 'ASd',
      description: 'description',
      cost: 12,
    });
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        products: [{ cost: 12, description: 'description', name: 'ASd' }],
      }),
    );
  });

  it('cannot add product to unknown warehouse', async () => {
    warehouseRepository = {
      get: jest.fn(() => Promise.reject(new ModelNotFound('error message'))),
      save: jest.fn(() => Promise.resolve(warehouse)),
    };
    warehouseService = new WarehouseService(warehouseRepository);

    await expect(
      warehouseService.addProduct('unknown id', {
        name: 'ASd',
        description: 'description',
        cost: 12,
      }),
    ).rejects.toEqual(expect.objectContaining({ message: 'Unable to retrieve model with id - unknown id' }));
  });
});
