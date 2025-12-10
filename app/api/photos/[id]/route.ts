import { getPhotoById } from '@/lib/image-data';
import { NextResponse } from 'next/server';

export async function GET(
   req: Request,
   { params }: { params: Promise<{ id: string }> }
) {
   //   console.log("params", params);
   const { id } = await params;
   const photoDetails = await getPhotoById(id);
   return Response.json(photoDetails);
}
