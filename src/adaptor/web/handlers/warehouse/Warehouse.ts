import { Static, Type } from '@sinclair/typebox';
import { product } from '../product/product';

export const createWarehouseBody = Type.Object({
  capacity: Type.Number(),
});

export const warehouseResponse = Type.Object({
  id: Type.String(),
  capacity: Type.Number(),
  products: Type.Array(product),
});

export const getWarehouseSchema = {
  schema: {
    response: {
      200: warehouseResponse,
    },
  },
};

export const createWarehouseSchema = {
  schema: {
    body: createWarehouseBody,
    response: {
      200: warehouseResponse,
    },
  },
};

//Requests
export type createWarehouseType = Static<typeof createWarehouseBody>;
//Responses
export type warehouseType = Static<typeof createWarehouseBody>;
