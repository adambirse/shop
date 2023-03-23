import { Warehouse, WarehouseResponse } from './WarehouseCreate';

export const warehouseCreateSchema = {
  schema: {
    body: Warehouse,
    response: {
      200: WarehouseResponse,
    },
  },
};

export const warehouseGetSchema = {
  schema: {
    response: {
      200: WarehouseResponse,
    },
  },
};
