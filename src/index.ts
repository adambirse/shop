import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import { WarehouseCreate, WarehouseResponse } from './web/handlers/WarehouseCreate';
import { warehouseCreateSchema } from './web/handlers/schema';
import { warehouseCreateHandler } from './web/handlers/warehouseCreateHandler';

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();

server.post<{ Body: WarehouseCreate; Reply: WarehouseResponse }>(
  '/warehouse',
  warehouseCreateSchema,
  warehouseCreateHandler(),
);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
