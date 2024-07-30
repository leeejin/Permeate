import { createClient } from '@/supabase/server';
import { LoginForm } from '@/types/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password }: LoginForm = await request.json();
    const supabase = createClient();

    const {
      data: { user },
      error
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-up/account-form`
      }
    });

    if (error) return NextResponse.json({ success: false, details: error.message });
    if (user) return NextResponse.json({ success: true, details: '회원가입 성공' });
  } catch (error) {
    return NextResponse.json({ success: false, details: error });
  }
}
