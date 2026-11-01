import { z } from 'zod';

export const quickEnquirySchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, { message: 'Please enter your name' })
      .max(80, { message: 'Name is too long' })
      .refine((val) => /^[a-zA-Z\s.'-]+$/.test(val), {
        message: 'Please enter a valid name using letters only',
      }),
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
    email: z
      .string()
      .trim()
      .optional()
      .refine(
        (val) => !val || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
        { message: 'Please enter a valid email address' }
      ),
    phone: z
      .string()
      .trim()
      .optional()
      .refine(
        (val) => !val || (/^[0-9+()\-\s]+$/.test(val) && val.replace(/\D/g, '').length >= 6),
        { message: 'Please enter a valid phone number' }
      ),
  })
  .refine(
    (data) => {
      const hasEmail = Boolean(data.email && data.email.length > 0);
      const hasPhone = Boolean(data.phone && data.phone.length > 0);
      return hasEmail || hasPhone;
    },
    {
      message: 'Please provide at least either your Phone Number or Email Address so our team can reach you.',
      path: ['email'], // Points to email so standard field typing matches seamlessly
    }
  );

export type QuickEnquiryData = z.infer<typeof quickEnquirySchema>;
