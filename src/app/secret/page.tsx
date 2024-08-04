'use client'
import { setCookies } from '@/script/set-cookies';
import { notFound, redirect, useSearchParams } from 'next/navigation';


export default function SecretPage() {
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const pass = `password`;

  if (!key) {
    notFound()
  }
  setCookies(key)
  redirect('/')
}


