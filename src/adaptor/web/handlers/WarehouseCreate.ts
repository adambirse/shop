import { Static, Type } from '@sinclair/typebox';

export const Warehouse = Type.Object({
  capacity: Type.Number(),
});

export const WarehouseResponse = Type.Object({
  id: Type.String(),
  capacity: Type.Number(),
});

export const ProductRequest = Type.Object({
  id: Type.String(),
});

//Requests
export type WarehouseCreate = Static<typeof Warehouse>;
export type ProductCreate = Static<typeof ProductRequest>;
//Responses
export type WarehouseResponse = Static<typeof Warehouse>;
