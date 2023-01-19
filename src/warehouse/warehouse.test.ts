import { Warehouse } from './warehouse';
describe('Warehouse', () => {
  const products = ['product 1', 'product 2'];
  it('Can create a warehouse', () => {
    expect(new Warehouse(products)).toBeDefined();
  });
  it('Can get products from warehouse', () => {
    const warehouse = new Warehouse(products);
    expect(warehouse.getProducts()).toBe(products);
  });

  it('Can add products', () => {
    const warehouse = new Warehouse(products);
    expect(warehouse.getProducts().length).toBe(2);
    warehouse.add('new producsts');
    expect(warehouse.getProducts().length).toBe(3);
  });
});
