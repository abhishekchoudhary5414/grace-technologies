import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(80, { message: 'Full name must be under 80 characters' }),
  businessEmail: z
    .string()
    .email({ message: 'Please enter a valid business email address' }),
  companyName: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(100, { message: 'Company name must be under 100 characters' }),
  phoneNumber: z
    .string()
    .min(6, { message: 'Please provide a valid phone number' })
    .max(25, { message: 'Phone number is too long' }),
  country: z
    .string()
    .min(2, { message: 'Please select or enter your country' }),
  serviceInterestedIn: z.enum([
    'Website Development',
    'Merchant Account Management',
    'AI Automation',
    'Digital Marketing',
    'Other',
  ], {
    message: 'Please select a valid service',
  }),
  projectBudget: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(2000, { message: 'Message cannot exceed 2000 characters' }),
  botCheck: z.string().optional(), // Honeypot spam protection
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
