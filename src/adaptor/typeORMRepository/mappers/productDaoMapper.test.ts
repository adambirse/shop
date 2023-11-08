import { Product } from '../../../domain/model/product/product';
import { ProductDao } from '../entities/productDao';
import { mapProductToDao } from './productDaoMapper';

describe('Product mapper', () => {
  const product: Product = {
    name: 'Name',
    cost: 45.2,
    description: 'A description',
  };

  const productDao: ProductDao = {
    domainId: 'id',
    name: 'Name',
    cost: 45.2,
    description: 'A description',
  } as ProductDao;

  it('should map to Dao', () => {
    expect(mapProductToDao(product)).toMatchObject(productDao);
  });
  it('should not map a database id', () => {
    const dao = mapProductToDao(product);
    expect(dao.id).toBeUndefined();
  });
  it('should not map a warehouse', () => {
    const dao = mapProductToDao(product);
    expect(dao.warehouse).toBeUndefined();
  });
});
