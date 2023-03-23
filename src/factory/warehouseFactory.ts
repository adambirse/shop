import { Warehouse } from '../domain/port/model/warehouse/warehouse';

export const create = (capacity: number) => {
  return new Warehouse([], capacity);
};
