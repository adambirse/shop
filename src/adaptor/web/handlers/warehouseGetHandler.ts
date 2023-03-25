import { serviceConfiguration } from '../../../service/serviceConfiguration';

export function warehouseGetHandler() {
  return async (request, reply) => {
    const { id } = request.params;
    const service = serviceConfiguration().warehouseService;
    const warehouse = await service.getWarehouse(id);
    //TODO convert to DTO
    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
    });
  };
}
