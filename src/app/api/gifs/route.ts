// app/api/gifs/route.ts
import { NextResponse } from 'next/server';
import type { TenorResponse } from '../../types/gif';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('searchTerm');

  if (!searchTerm) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
  }

  const apiKey = 'AIzaSyDH8eeryfjl2BqlAzVu9uK0seapU8yxED8'; // Замените на ваш API ключ
  const url = `https://api.tenor.com/v1/search?q=${encodeURIComponent(searchTerm)}&key=${apiKey}&limit=10`;

  try {
    const response = await fetch(url);
    const data: TenorResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch GIFs' }, { status: 500 });
  }
}
