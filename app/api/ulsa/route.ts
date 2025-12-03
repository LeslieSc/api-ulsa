import { NextResponse } from "next/server";

export async function GET() {
  const mision =
    "Somos una institución que forma parte de una red global de inspiración cristiana lasallista; comprometida con la educación profesional y formación integral de las personas quienes, con su acción transformadora, trasciendan al coadyuvar en la construcción de una ciudadanía responsable y solidaria, en el cambio social y el cuidado de la Casa Común";

  return NextResponse.json({
    institucion: "Universidad La Salle Chihuahua",
    mision
  });
}
