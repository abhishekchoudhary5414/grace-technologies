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

    // Connect to Supabase and persist directly into enquiries table
    const supabase = createServerSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from('enquiries').insert([
        {
          name: fullName,
          service: serviceType,
          email: email || 'Not Provided (Phone Only)',
          phone: phone || 'Not Provided (Email Only)',
          status: 'New',
          notes: null,
        },
      ]);

      if (dbError) {
        console.error('Supabase enquiry insert error:', dbError);
      }
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
        message: 'Something went wrong while submitting. Please try again.',
      },
      { status: 500 }
    );
  }
}
