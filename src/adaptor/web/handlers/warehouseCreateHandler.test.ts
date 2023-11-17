import { Operations } from '../../../domain/operations';
import { warehouseCreateHandler } from './warehouseCreateHandler';

let mockWarehouseService: Operations;
let mockRequest: { body: { capacity: number } };
let mockReply: { status: jest.Mock; send: jest.Mock };
let createWarehouse;

beforeEach(() => {
  createWarehouse = jest.fn().mockResolvedValue({
    id: 'sample_id',
    capacity: 100,
  });
  mockWarehouseService = {
    createWarehouse,
    getWarehouse: jest.fn(),
    addProduct: jest.fn(),
  };

  mockRequest = {
    body: {
      capacity: 100,
    },
  };

  mockReply = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('warehouseCreateHandler', () => {
  it('should create a warehouse and return the correct response', async () => {
    const handler = warehouseCreateHandler(mockWarehouseService);
    await handler(mockRequest, mockReply);

    const expectedResponse = {
      capacity: 100,
      id: 'sample_id',
    };
    expect(mockWarehouseService.createWarehouse).toHaveBeenCalledWith(100);
    expect(mockReply.status).toHaveBeenCalledWith(200);
    expect(mockReply.send).toHaveBeenCalledWith(expectedResponse);
  });

  it('should return a 500 if unable to create the warehouse', async () => {
    const error = new Error('Unable to create warehouse');
    createWarehouse.mockRejectedValue(error);

    const handler = warehouseCreateHandler(mockWarehouseService);
    await handler(mockRequest, mockReply);

    expect(mockWarehouseService.createWarehouse).toHaveBeenCalledWith(100);
    expect(mockReply.status).toHaveBeenCalledWith(500);
    expect(mockReply.send).toHaveBeenCalledWith({ error: 'Unable to create warehouse' });
  });
});
