import { ProductRequest, Warehouse, WarehouseResponse } from './WarehouseCreate';

export const warehouseCreateSchema = {
  schema: {
    body: Warehouse,
    response: {
      200: WarehouseResponse,
    },
  },
};

export const productCreateSchema = {
  schema: {
    body: ProductRequest,
  },
};

export const warehouseGetSchema = {
  schema: {
    response: {
      200: WarehouseResponse,
    },
  },
};
