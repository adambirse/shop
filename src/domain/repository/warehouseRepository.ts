import { Warehouse } from '../model/warehouse/warehouse';
// Repositories should be defined as an interface, so that they
// can support implementation as different ORM or test instances.
//
// The repository MUST NOT implement business logic, such as making
// decisions on the validity of the given operation, or mutating the
// content of the object.  The repository is solely concerned with
// moving the data into and out of the persistence engine correctly.
export interface WarehouseRepository {
  save(warehouse: Warehouse): Warehouse;
  get(id: string): Warehouse | undefined;
}
