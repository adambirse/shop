import { Operations } from '../../../domain/operations';

export const warehouseGetHandler = (service: Operations) => async (request, reply) => {
  const { id } = request.params;
  const warehouse = await service.getWarehouse(id);
  //TODO convert to DTO
  reply.status(200).send({
    capacity: warehouse.capacity,
    id: warehouse.id,
  });
};
