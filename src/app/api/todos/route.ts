import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

//Ejemplo de paginación
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json(
      { error: "Take/Skip debe ser un numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ skip, take });
  return NextResponse.json(todos);
}

//Validar el body de la petición
const postSchema = yup.object().shape({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false), //Valor por defecto
});

//Crear un todo
export async function POST(request: NextRequest) {
  try {
    const { description } = await postSchema.validate(await request.json());

    const newTodo = await prisma.todo.create({ data: { description } });
    return NextResponse.json({ message: "POST /api/todos", data: newTodo });
  } catch (error) {
    return NextResponse.json({ error: { status: 400 } });
  }
}

//Eliminar un todo
export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "Id es requerido" }, { status: 400 });
  }

  const deleteTodo = await prisma.todo.delete({ where: { id: String(id) } });

  return NextResponse.json({ message: "DELETE /api/todos", data: deleteTodo });
}
