import { createClient } from '@/app/supabase/server';
import { NextResponse } from 'next/server';

export async function DELETE(request: NextResponse) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') as string;
    await supabase.from('Carts').delete().eq('userId', userId);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
