import { z } from 'zod';
import { serviceOptions } from '../data/services.js';
import { budgetRanges } from '../data/site.js';

const optionalText = (max) => z.string().trim().max(max, `Please keep this under ${max} characters`).optional().or(z.literal(''));

// Client-side validation. The server re-validates everything in server/src/validation.js.
export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100, 'Please keep your name under 100 characters'),
  email: z.string().trim().min(1, 'Please enter your email address').email('Please enter a valid email address').max(254),
  phone: z
    .string()
    .trim()
    .max(25)
    .refine((v) => v === '' || /^[+()\d\s-]{7,25}$/.test(v), 'Please enter a valid phone number')
    .optional(),
  company: optionalText(120),
  service: z.string().refine((v) => serviceOptions.includes(v), 'Please choose a service'),
  budget: z.string().refine((v) => v === '' || budgetRanges.includes(v), 'Please choose a budget range').optional(),
  message: z.string().trim().min(10, 'Please tell us a little more (at least 10 characters)').max(3000, 'Please keep your message under 3,000 characters'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm you agree to our Privacy Policy' }) }),
  website: z.string().optional() // honeypot – must stay empty
});
