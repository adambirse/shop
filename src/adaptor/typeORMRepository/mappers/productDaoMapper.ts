import { Product } from '../../../domain/model/product/product';
import { ProductDao } from '../entities/productDao';

export const mapProductToDao = (product: Product): ProductDao => {
  return new ProductDao(product.id, product.name, product.description, product.cost);
};
export const mapDaoToModel = (productDao: ProductDao): Product => {
  return new Product(productDao.name, productDao.cost, productDao.description);
};
