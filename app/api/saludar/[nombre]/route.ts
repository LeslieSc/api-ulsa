import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { nombre: string } }
) {
  return NextResponse.json({
    mensaje: `Hola ${params.nombre}`
  });
}
