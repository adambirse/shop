import { Static, Type } from '@sinclair/typebox';

export const createWarehouseBody = Type.Object({
  capacity: Type.Number(),
});

export const warehouseResponse = Type.Object({
  id: Type.String(),
  capacity: Type.Number(),
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
