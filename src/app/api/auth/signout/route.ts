import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const supabase = createServerComponentClient({ cookies });
  
  // Sign out the user
  await supabase.auth.signOut();
  
  return NextResponse.redirect(new URL('/', request.url));
} 