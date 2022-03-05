import { z } from 'zod';

import { collectionSchema } from './Response';

const Roles = {
  Admin: 'Admin',
  Employee: 'Employee',
  User: 'User',
} as const;

const SendCodeMethods = {
  Phone: 'Phone',
  Mail: 'Mail',
} as const;

const userSchema = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  lastName: z.string(),
  mail: z.string().optional(),
  phoneNumber: z.string().optional(),
  role: z.nativeEnum(Roles),
  methodSendCode: z.nativeEnum(SendCodeMethods),
});

const userCollectionSchema = collectionSchema.extend({
  users: z.array(userSchema),
});

export type UserResponse = z.infer<typeof userSchema>;
export type UserCollectionResponse = z.infer<typeof userCollectionSchema>;
