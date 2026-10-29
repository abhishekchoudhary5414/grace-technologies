import { NextResponse } from 'next/server';
import { quickEnquirySchema } from '@/schemas/enquiryModal';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = quickEnquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { fullName, serviceType, email, phone } = validation.data;

    // Connect to Supabase if configured
    const supabase = createServerSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from('contact_enquiries').insert([
        {
          full_name: fullName,
          business_email: email || 'Not Provided (Phone Only)',
          company_name: 'Direct Website Popup Lead',
          phone_number: phone || 'Not Provided (Email Only)',
          country: 'Inquiry Lead',
          service_interested_in: serviceType,
          message: `Quick enquiry received via opening popup modal for ${serviceType}. Contact via: ${phone || email}`,
        },
      ]);

      if (dbError) {
        console.error('Supabase popup lead insert error:', dbError);
      }
    } else {
      console.log('--- QUICK ENQUIRY POPUP SUBMISSION ---');
      console.log({ fullName, serviceType, email, phone });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
    });
  } catch (err: unknown) {
    console.error('Popup submission error:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to submit enquiry at this time. Please try again.',
      },
      { status: 500 }
    );
  }
}

