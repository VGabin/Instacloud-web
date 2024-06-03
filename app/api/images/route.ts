import type { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {
  const resources = await cloudinary.search.expression('ml_default').execute()

  console.log(resources);
  
  return new Response('resources')
}