import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import { WarehouseCreate, WarehouseResponse } from './adaptor/web/handlers/WarehouseCreate';
import { warehouseCreateSchema, warehouseGetSchema } from './adaptor/web/handlers/schema';
import { warehouseCreateHandler } from './adaptor/web/handlers/warehouseCreateHandler';
import { warehouseGetHandler } from './adaptor/web/handlers/warehouseGetHandler';
import { WarehouseService } from './service/warehouseService';
import { InMemoryWarehouseRepository } from './adaptor/repository/inMemoryWarehouseRepository';

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();
const warehouseRepository = new InMemoryWarehouseRepository();
const service = new WarehouseService(warehouseRepository);

server.post<{ Body: WarehouseCreate; Reply: WarehouseResponse }>(
  '/warehouse',
  warehouseCreateSchema,
  warehouseCreateHandler(service),
);

server.get<{ Reply: WarehouseResponse }>('/warehouse/:id', warehouseGetSchema, warehouseGetHandler(service));

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
