import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { Operations } from '../../../domain/operations';
import { warehouseGetHandler } from './warehouseGetHandler';

let mockWarehouseService: Operations;
let mockRequest: { params: { id: string } };
let mockReply: { status: jest.Mock; send: jest.Mock };
let getWarehouse;
const sample_id = 'sample_id';

const mockedWarehouse: Warehouse = new Warehouse([], 100);
mockedWarehouse.id = sample_id;

beforeEach(() => {
  getWarehouse = jest.fn().mockResolvedValue(mockedWarehouse);
  mockWarehouseService = {
    createWarehouse: jest.fn(),
    getWarehouse: getWarehouse,
    addProduct: jest.fn(),
  };

  mockRequest = {
    params: {
      id: sample_id,
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
      id: sample_id,
      products: [],
    };
    expect(mockWarehouseService.getWarehouse).toHaveBeenCalledWith('sample_id');
    expect(mockReply.status).toHaveBeenCalledWith(200);
    expect(mockReply.send).toHaveBeenCalledWith(expectedResponse);
  });
});
