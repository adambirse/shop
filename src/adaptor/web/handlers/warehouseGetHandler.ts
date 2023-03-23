import { WarehouseService } from '../../../service/warehouseService';

export function warehouseGetHandler(service: WarehouseService) {
  return (request, reply) => {
    const { id } = request.params;
    const warehouse = service.getWarehouse(id);
    if (warehouse) {
      reply.status(200).send({
        capacity: warehouse.capacity,
        id: warehouse.id,
      });
    } else {
      reply.status(404).send('Warehouse not found');
    }
  };
}
