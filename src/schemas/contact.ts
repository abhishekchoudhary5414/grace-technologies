import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(80, { message: 'Name must be under 80 characters' })
    .refine((val) => /^[a-zA-Z\s.'-]+$/.test(val), {
      message: 'Please enter a valid name using letters only',
    }),
  email: z
    .string()
    .trim()
    .refine((val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val), {
      message: 'Please enter a valid email address',
    }),
  phone_number: z
    .string()
    .trim()
    .refine((val) => /^[0-9+()\-\s]+$/.test(val) && val.replace(/\D/g, '').length >= 6, {
      message: 'Please provide a valid phone number',
    })
    .max(25, { message: 'Phone number is too long' }),
  service: z.enum([
    'Website Development',
    'Merchant Account Management',
    'AI Automation',
    'Digital Marketing',
    'Other',
  ], {
    message: 'Please select a valid service',
  }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(2000, { message: 'Message cannot exceed 2000 characters' }),
  botCheck: z.string().optional(), // Honeypot spam protection
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
