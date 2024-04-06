/*
  Patron Singleton
  - Creamos una clase PrismaService que gestiona la instancia única de PrismaClient usando un patrón singleton.
  - getInstance() se utiliza para obtener la instancia única de PrismaService.
  - Accedemos a prisma a través de PrismaService.getInstance().prisma.
*/

import { PrismaClient } from "@prisma/client";

class PrismaService {
  private static instance: PrismaService;
  prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaService();
    }
    return PrismaService.instance;
  }
}

const prisma = PrismaService.getInstance().prisma;
export default prisma;
