import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/schemas/contact';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Check honeypot spam protection
    if (body.botCheck && body.botCheck.length > 0) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    // 2. Validate input schema with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Connect to Supabase and persist into contact_submissions table
    const supabase = createServerSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from('contact_submissions').insert([
        {
          name: data.fullName,
          email: data.businessEmail,
          phone_number: data.phoneNumber,
          service: data.serviceInterestedIn,
          messages: data.message,
          status: 'New',
          notes: data.companyName ? `Company: ${data.companyName} | Budget: ${data.projectBudget || 'Not specified'}` : null,
        },
      ]);

      if (dbError) {
        console.error('Supabase contact_submissions insert error:', dbError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your inquiry has been transmitted to our executive consulting team. We will review your requirements and respond within one business day.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An internal error occurred while transmitting your request. Please email us directly at contact@gracetechnologies.uk.',
      },
      { status: 500 }
    );
  }
}
