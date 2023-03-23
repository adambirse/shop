import fastify from 'fastify';
import { Product } from './domain/port/model/product/product';
import { WarehouseService } from './service/warehouseService';

const server = fastify();
const service = new WarehouseService();

server.get('/ping', pingHandler());

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

function pingHandler() {
  return async (_request, _reply) => {
    service.createWarehouse(10);
    const product = new Product('Name 1', 1.23, 'Description 1');
    const product2 = new Product('Name 2', 8.23, 'Description 2');

    service.save(product);
    const products = service.save(product2);

    return products;
  };
}
