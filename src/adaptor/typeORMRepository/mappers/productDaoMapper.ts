import { Product } from '../../../domain/model/product/product';
import { ProductDao } from '../entities/productDao';

export const mapProductToDao = (product: Product): ProductDao => {
  const productDao = new ProductDao(product.name, product.description, product.cost);
  productDao.id = product.id;
  return productDao;
};
export const mapDaoToModel = (productDao: ProductDao): Product => {
  const product = new Product(productDao.name, productDao.cost, productDao.description);
  product.id = productDao.id;
  return product;
};
