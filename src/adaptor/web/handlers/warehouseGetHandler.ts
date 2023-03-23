import { WarehouseService } from '../../../service/warehouseService';

export function warehouseGetHandler(service: WarehouseService) {
  return (request, reply) => {
    const { id } = request.params;
    const warehouse = service.getWarehouse(id);
    //TODO convert to DTO
    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
    });
  };
}
