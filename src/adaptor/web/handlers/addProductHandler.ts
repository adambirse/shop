import { Operations } from '../../../domain/operations';

export const addProductHandler = (service: Operations) => async (request, reply) => {
  const { id, name, description, cost } = request.body;
  await service.addProduct(id, {
    name: name,
    description: description,
    cost: cost,
  });
  reply.status(200).send();
};
