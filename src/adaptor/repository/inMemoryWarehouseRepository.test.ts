import { InMemoryWarehouseRepository } from './inMemoryWarehouseRepository';
import { create } from '../../domain/factory/warehouseFactory';

describe('In Mermory warehouse repository', () => {
  const repository = new InMemoryWarehouseRepository();
  it('Can create and retrieve', () => {
    const warehouse = create(1);

    repository.save(warehouse);
    expect(repository.get(warehouse.id)).toBeDefined();
  });
  it('Returns undefined for non existent warehouse', () => {
    expect(repository.get('non existent')).toBeUndefined();
  });
});
