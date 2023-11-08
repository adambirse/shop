import { serviceConfiguration } from '../../../service/serviceConfiguration';

export function addProductHandler() {
  return async (request, reply) => {
    const service = serviceConfiguration().warehouseService;
    const { id } = request.body;
    await service.addProduct(id, {
      name: 'name',
      description: 'description',
      cost: 12,
    });
    reply.status(200).send();
  };
}
