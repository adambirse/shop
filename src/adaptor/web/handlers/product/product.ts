import { Static, Type } from '@sinclair/typebox';

const ProductRequest = Type.Object({
  id: Type.String(),
});

export const productCreateSchema = {
  schema: {
    body: ProductRequest,
  },
};

export type ProductCreate = Static<typeof ProductRequest>;
