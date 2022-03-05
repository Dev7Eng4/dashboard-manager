import { z } from 'zod';
import { AxiosError } from 'axios';
import { AuthResponse } from './Auth';

export const collectionSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  totalAvailable: z.number(),
});

export type ValidAxiosResponse = string | AuthResponse;

interface ErrorResponseData {
  message?: string;
}

export type ErrorResponse = AxiosError<ErrorResponseData>;
