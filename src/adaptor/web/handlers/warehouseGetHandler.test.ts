import { Operations } from '../../../domain/operations';
import { warehouseGetHandler } from './warehouseGetHandler';

let mockWarehouseService: Operations;
let mockRequest: { params: { id: string } };
let mockReply: { status: jest.Mock; send: jest.Mock };
let getWarehouse;

beforeEach(() => {
  getWarehouse = jest.fn().mockResolvedValue({
    id: 'sample_id',
    capacity: 100,
  });
  mockWarehouseService = {
    createWarehouse: jest.fn(),
    getWarehouse: getWarehouse,
    addProduct: jest.fn(),
  };

  mockRequest = {
    params: {
      id: 'sample_id',
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

describe('warehouseGetHandler', () => {
  it('should get a warehouse and return the correct response', async () => {
    const handler = warehouseGetHandler(mockWarehouseService);
    await handler(mockRequest, mockReply);

    const expectedResponse = {
      capacity: 100,
      id: 'sample_id',
    };
    expect(mockWarehouseService.getWarehouse).toHaveBeenCalledWith('sample_id');
    expect(mockReply.status).toHaveBeenCalledWith(200);
    expect(mockReply.send).toHaveBeenCalledWith(expectedResponse);
  });
});
