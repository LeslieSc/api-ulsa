import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ nombre: string }> }
) {
  // context.params es un Promise, así que lo esperamos:
  const { nombre } = await context.params;

  return NextResponse.json({
    mensaje: `Hola ${nombre}`
  });
}
