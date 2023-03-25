import { WarehouseService } from '../../../service/warehouseService';

export function warehouseCreateHandler(service: WarehouseService) {
  return async (request, reply) => {
    const { capacity } = request.body;
    const warehouse = await service.createWarehouse(capacity);
    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
    });
  };
}
