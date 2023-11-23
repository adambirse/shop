import { Operations } from '../../../domain/operations';

export const warehouseCreateHandler = (service: Operations) => async (request, reply) => {
  try {
    const { capacity } = request.body;
    const warehouse = await service.createWarehouse(capacity);

    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
      products: warehouse.products,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      reply.status(500).send({ error: error.message });
    } else {
      reply.status(500);
    }
  }
};
