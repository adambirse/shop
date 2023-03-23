import { Warehouse } from '../model/warehouse/warehouse';

export const create = (capacity: number) => {
  return new Warehouse([], capacity);
};
