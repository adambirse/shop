import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

import { warehouseCreateHandler } from './adaptor/web/handlers/warehouseCreateHandler';
import { warehouseGetHandler } from './adaptor/web/handlers/warehouseGetHandler';
import { addProductHandler } from './adaptor/web/handlers/addProductHandler';
import { ModelNotFound } from './domain/errors/ModelNotFoundError';
import { initialiseDB } from './adaptor/typeORMRepository/data-source';
import { serviceConfiguration } from './service/serviceConfiguration';
import {
  createWarehouseSchema,
  getWarehouseSchema,
  createWarehouseType,
  warehouseType,
} from './adaptor/web/handlers/warehouse/Warehouse';
import { createProductType, createProductSchema } from './adaptor/web/handlers/product/product';

const server = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

server.setErrorHandler(function (error, _request, reply) {
  if (error instanceof ModelNotFound) {
    reply.status(404).send({ message: error.message });
  } else {
    // Send error response
    console.log(error);
    reply.status(409).send({ ok: false });
  }
});

server.post<{ Body: createWarehouseType; Reply: warehouseType }>(
  '/warehouse',
  createWarehouseSchema,
  warehouseCreateHandler(serviceConfiguration().warehouseService),
);
server.post<{ Body: createProductType }>(
  '/warehouse/product',
  createProductSchema,
  addProductHandler(serviceConfiguration().warehouseService),
);

server.get<{ Reply: warehouseType }>(
  '/warehouse/:id',
  getWarehouseSchema,
  warehouseGetHandler(serviceConfiguration().warehouseService),
);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  initialiseDB();
  console.log(`Server listening at ${address}`);
});
