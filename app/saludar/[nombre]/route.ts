import { NextResponse } from "next/server";

type Params = {
  params: {
    nombre: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { nombre } = params;

  return NextResponse.json({
    mensaje: `Hola ${nombre}`
  });
}
