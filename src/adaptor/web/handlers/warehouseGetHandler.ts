import { Warehouse } from '../../../domain/model/warehouse/warehouse';
import { Operations } from '../../../domain/operations';

export const warehouseGetHandler = (service: Operations) => async (request, reply) => {
  const { id } = request.params;
  const warehouse: Warehouse = await service.getWarehouse(id);
  //TODO convert to DTO
  reply.status(200).send({
    capacity: warehouse.capacity,
    id: warehouse.id,
    products: warehouse.products,
  });
};
