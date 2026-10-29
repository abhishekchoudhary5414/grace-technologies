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

    // 3. Connect to Supabase if credentials are provided
    const supabase = createServerSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from('contact_enquiries').insert([
        {
          full_name: data.fullName,
          business_email: data.businessEmail,
          company_name: data.companyName,
          phone_number: data.phoneNumber,
          country: data.country,
          service_interested_in: data.serviceInterestedIn,
          project_budget: data.projectBudget || null,
          message: data.message,
        },
      ]);

      if (dbError) {
        console.error('Supabase insert error:', dbError);
        // Fallback or bubble error
      }
    } else {
      // In development or if supabase keys are yet to be set in environment variables,
      // log to server console gracefully so submissions never drop
      console.log('--- NEW CONTACT ENQUIRY RECEIVED ---');
      console.log(JSON.stringify(data, null, 2));
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting Grace Technologies. A member of our executive consulting team will review your inquiry and reach out shortly.',
    });
  } catch (err: unknown) {
    console.error('Server error submitting contact form:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

