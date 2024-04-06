import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: {
    id: string;
  };
}

//Obtener un todo por id
export async function GET(_request: NextRequest, { params }: Segments) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "Id es requerido" }, { status: 400 });
  }

  const findTodo = await prisma.todo.findUnique({ where: { id: String(id) } });

  if (!findTodo) {
    return NextResponse.json(
      { error: "No se encontro el todo" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "GET /api/todos/[id]", data: findTodo });
}
