import { z } from 'zod';

import { collectionSchema } from './Response';

const productSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string(),
  icon: z.string().optional(),
  collectionImage: z.array(z.string()),
  total: z.number(),
  price: z.number(),
  category: z.string(),
});

const productCollectionSchema = collectionSchema.extend({
  users: z.array(productSchema),
});

export type ProductResponse = z.infer<typeof productSchema>;
export type ProductCollectionResponse = z.infer<typeof productCollectionSchema>;
