import { Warehouse } from './warehouse';
describe('Warehouse', () => {
  const products = ['product 1', 'product 2'];
  it('Can initialise warehouse', () => {
    expect(new Warehouse(products)).toBeDefined();
  });
  it('Can get products from warehouse', () => {
    const warehouse = new Warehouse(products);
    expect(warehouse.getProducts()).toBe(products);
  });
});
