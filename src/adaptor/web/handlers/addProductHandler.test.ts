import { AddProductRequest } from '../../../domain/model/AddProduct';
import { Operations } from '../../../domain/operations';
import { addProductHandler } from './addProductHandler';

let mockWarehouseService: Operations;
let mockRequest: { body: { id: string } };
let mockReply: { status: jest.Mock; send: jest.Mock };
let addProduct;
const expectedAddProductParameters: AddProductRequest = {
  name: 'name',
  description: 'description',
  cost: 12,
};

beforeEach(() => {
  addProduct = jest.fn().mockResolvedValue({
    id: 'sample_id',
    capacity: 100,
  });
  mockWarehouseService = {
    createWarehouse: jest.fn(),
    getWarehouse: jest.fn(),
    addProduct: addProduct,
  };

  mockRequest = {
    body: {
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

describe('addProductHandler', () => {
  it('should add a product to a warehouse', async () => {
    const handler = addProductHandler(mockWarehouseService);
    await handler(mockRequest, mockReply);

    expect(mockWarehouseService.addProduct).toHaveBeenCalledWith('sample_id', expectedAddProductParameters);
    expect(mockReply.status).toHaveBeenCalledWith(200);
  });
});
