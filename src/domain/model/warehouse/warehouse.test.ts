import { Warehouse } from './warehouse';
import { Product } from '../product/product';
import { StorageError } from '../../errors/warehouse/StorageError';
describe('Warehouse', () => {
  const products: Product[] = createProducts(2);
  it('Can create a warehouse', () => {
    expect(new Warehouse(products)).toBeDefined();
  });

  it('Can create a warehouse with optional capacity', () => {
    expect(new Warehouse(products, 5)).toBeDefined();
  });

  it('Can not create a warehouse if capacity is exceeded', () => {
    expect(() => new Warehouse(products, 1)).toThrow(StorageError);
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
    expect(() => warehouse.add(createProducts(1)[0])).toThrow(StorageError);
    expect(warehouse.getProducts().length).toBe(2);
  });
});

function createProducts(noOfProducts: number): Product[] {
  //map function that takes value(_x) and position i and creates object
  const array: Product[] = Array.from({ length: noOfProducts }, (_x, i) => ({
    name: `name ${i}`,
    cost: 12.34,
    description: `description ${i}`,
  }));

  return array;
}
