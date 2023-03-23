import { Static, Type } from '@sinclair/typebox';

export const Warehouse = Type.Object({
  capacity: Type.Number(),
});

export const WarehouseResponse = Type.Object({
  id: Type.String(),
  capacity: Type.Number(),
});

//Requests
export type WarehouseCreate = Static<typeof Warehouse>;
//Responses
export type WarehouseResponse = Static<typeof Warehouse>;
