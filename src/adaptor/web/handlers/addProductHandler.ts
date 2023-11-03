import { serviceConfiguration } from '../../../service/serviceConfiguration';

export function addProductHandler() {
  return async (request, reply) => {
    const service = serviceConfiguration().warehouseService;
    const { warehouseId } = request.body;
    await service.addProduct(warehouseId, {
      name: 'name',
      description: 'description',
      cost: 12,
    });
    reply.status(200).send();
  };
}
