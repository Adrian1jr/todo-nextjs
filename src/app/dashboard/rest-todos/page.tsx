import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todos Page",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
