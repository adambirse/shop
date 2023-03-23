import { WarehouseService } from '../../../domain/service/warehouseService';

export function warehouseCreateHandler(service: WarehouseService) {
  return (request, reply) => {
    const { capacity } = request.body;
    const warehouse = service.createWarehouse(capacity);
    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
    });
  };
}
