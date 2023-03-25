import { serviceConfiguration } from '../../../service/serviceConfiguration';

export function warehouseCreateHandler() {
  return async (request, reply) => {
    const service = serviceConfiguration().warehouseService;
    const { capacity } = request.body;
    const warehouse = await service.createWarehouse(capacity);
    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
    });
  };
}
