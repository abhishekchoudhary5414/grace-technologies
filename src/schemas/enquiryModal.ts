import { z } from 'zod';

export const quickEnquirySchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: 'Please enter your name' })
      .max(80, { message: 'Name is too long' }),
    serviceType: z.enum(
      [
        'Website Development',
        'Merchant Account Management',
        'AI Automation',
        'Digital Marketing',
        'Other Consultation',
      ],
      {
        message: 'Please choose a service',
      }
    ),
    contact: z.string().trim().min(1, {
      message: 'Please enter your email address or phone number',
    }),
  })
  .refine(
    (data) => {
      const value = data.contact;
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      const isPhone = /^[+()\d\s.-]{6,}$/.test(value) && value.replace(/\D/g, '').length >= 6;
      return isEmail || isPhone;
    },
    {
      message: 'Please enter a valid email address or phone number.',
      path: ['contact'],
    }
  );

export type QuickEnquiryData = z.infer<typeof quickEnquirySchema>;
