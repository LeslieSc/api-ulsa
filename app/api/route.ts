import { NextResponse } from "next/server";

export async function GET() {
  const integrantes = ["Leslie Sosa"];

  return NextResponse.json({
    equipo: "Equipo de Leslie",
    integrantes
  });
}
