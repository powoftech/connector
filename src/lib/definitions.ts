import { z } from 'zod'

export const EmailFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})
