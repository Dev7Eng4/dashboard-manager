import { z } from 'zod';

export const authSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  refresh_token: z.string(),
  expires_in: z.number(),
});

export type AuthResponse = z.infer<typeof authSchema>;
