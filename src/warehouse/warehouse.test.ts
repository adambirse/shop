import { Warehouse } from './warehouse';
describe('Warehouse', () => {
  const products = ['product 1', 'product 2'];
  it('Can create a warehouse', () => {
    expect(new Warehouse(products)).toBeDefined();
  });

  it('Can create a warehouse with optional capacity', () => {
    expect(new Warehouse(products, 5)).toBeDefined();
  });

  it('Can not create a warehouse if capacity is exceeded', () => {
    expect(() => new Warehouse(products, 1)).toThrow(Error);
  });
  it('Can get products from warehouse', () => {
    const warehouse = new Warehouse(products);
    expect(warehouse.getProducts()).toBe(products);
  });

  it('Can add products', () => {
    const warehouse = new Warehouse(products);
    expect(warehouse.getProducts().length).toBe(2);
    warehouse.add('new products');
    expect(warehouse.getProducts().length).toBe(3);
  });

  it('Cannot add products if capacity exceeded', () => {
    const warehouse = new Warehouse(products, 2);
    expect(() => warehouse.add('new products')).toThrow(Error);
    expect(warehouse.getProducts().length).toBe(2);
  });
});
