import PROJECTS_DATA from '@/data/projects';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(PROJECTS_DATA);
}
