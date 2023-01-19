import { Product } from './product';
describe('Product', () => {
  it('Can create a produ ct', () => {
    const product = new Product('name', 3.45, 'A cheap product');
    expect(product).toBeDefined();
    expect(product.name).toBe('name');
    expect(product.cost).toBe(3.45);
    expect(product.description).toBe('A cheap product');
  });
});
