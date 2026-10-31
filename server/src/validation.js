import { z } from 'zod';

const optional = (max) => z.string().trim().max(max).optional().default('');

// Server-side validation for both /api/quote and /api/contact. Mirrors src/lib/formSchema.js.
export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email address').max(254),
  phone: z
    .string()
    .trim()
    .max(25)
    .refine((v) => v === '' || /^[+()\d\s-]{7,25}$/.test(v), 'Please enter a valid phone number')
    .optional()
    .default(''),
  company: optional(120),
  service: z.string().trim().min(1, 'Please choose a service').max(120),
  budget: optional(40),
  message: z.string().trim().min(10, 'Please tell us a little more about your project').max(3000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
  website: z.string().optional().default(''), // honeypot
  page: z.string().max(200).optional().default('')
});
