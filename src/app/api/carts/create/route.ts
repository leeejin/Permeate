import { createClient } from '@/app/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId') as string;
    const userId = searchParams.get('userId') as string;

    await supabase.from('Carts').insert({ productId, userId, count: 1 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
