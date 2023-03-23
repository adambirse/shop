import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import { WarehouseCreate, WarehouseResponse } from './web/handlers/WarehouseCreate';
import { warehouseCreateSchema, warehouseGetSchema } from './web/handlers/schema';
import { warehouseCreateHandler } from './web/handlers/warehouseCreateHandler';
import { warehouseGetHandler } from './web/handlers/warehouseGetHandler';
import { WarehouseService } from './service/warehouseService';

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();
const service = new WarehouseService();

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
