import { Warehouse } from './warehouse';
import { Product } from '../product/product';
describe('Warehouse', () => {
  const products: Product[] = createProducts(2);
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
    warehouse.add(createProducts(1)[0]);
    expect(warehouse.getProducts().length).toBe(3);
  });

  it('Cannot add products if capacity exceeded', () => {
    const warehouse = new Warehouse(products, 2);
    expect(() => warehouse.add(createProducts(1)[0])).toThrow(Error);
    expect(warehouse.getProducts().length).toBe(2);
  });
});
function createProducts(noOfProducts: number): Product[] {
  const products: Product[] = [];
  for (let x = 0; x < noOfProducts; x++) {
    products.push({
      name: 'name',
      cost: 3.45,
      description: 'description',
    });
  }
  return products;
}
