import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import { WarehouseCreate, WarehouseResponse } from './adaptor/web/handlers/WarehouseCreate';
import { warehouseCreateSchema, warehouseGetSchema } from './adaptor/web/handlers/schema';
import { warehouseCreateHandler } from './adaptor/web/handlers/warehouseCreateHandler';
import { warehouseGetHandler } from './adaptor/web/handlers/warehouseGetHandler';
import { ModelNotFound } from './domain/errors/ModelNotFoundError';
import { initialiseDB } from './adaptor/typeORMRepository/data-source';

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();

server.setErrorHandler(function (error, _request, reply) {
  if (error instanceof ModelNotFound) {
    reply.status(404).send({ message: error.message });
  } else {
    // Send error response
    reply.status(409).send({ ok: false });
  }
});

server.post<{ Body: WarehouseCreate; Reply: WarehouseResponse }>(
  '/warehouse',
  warehouseCreateSchema,
  warehouseCreateHandler(),
);

server.get<{ Reply: WarehouseResponse }>('/warehouse/:id', warehouseGetSchema, warehouseGetHandler());

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  initialiseDB();
  console.log(`Server listening at ${address}`);
});
