import { Static, Type } from '@sinclair/typebox';

export const createProductBody = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.String(),
  cost: Type.Number(),
});

export const product = Type.Object({
  id: Type.String(),
  name: Type.String(),
  cost: Type.Number(),
  description: Type.String(),
});

export const createProductSchema = {
  schema: {
    body: createProductBody,
  },
};

export type createProductType = Static<typeof createProductBody>;
