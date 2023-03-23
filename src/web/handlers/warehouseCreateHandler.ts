import { WarehouseService } from '../../service/warehouseService';

const service = new WarehouseService();

export function warehouseCreateHandler() {
  return (request, reply) => {
    const { capacity } = request.body;
    console.log(capacity);
    const warehouse = service.createWarehouse(capacity);
    reply.status(200).send({
      capacity: warehouse.capacity,
      id: warehouse.id,
    });
  };
}
