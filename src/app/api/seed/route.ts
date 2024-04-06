import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
  //borrar todos los registros (delete * from todo)
  await prisma.todo.deleteMany({
    where: {}, //por si ocupamos alguna condición
  });

  //preparar inserción de datos
  await prisma.todo.createMany({
    data: [
      { description: "Test", complete: true },
      { description: "Test 1" },
      { description: "Test 2" },
      { description: "Test 3" },
    ],
  });

  return NextResponse.json({ message: "Seed Execute" });
}
