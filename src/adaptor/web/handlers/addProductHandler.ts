import { Operations } from '../../../domain/operations';

export const addProductHandler = (service: Operations) => async (request, reply) => {
  const { id } = request.body;
  await service.addProduct(id, {
    name: 'name',
    description: 'description',
    cost: 12,
  });
  reply.status(200).send();
};
