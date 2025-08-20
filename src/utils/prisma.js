import { PrismaClient } from "@prisma/client";

// Ensure we reuse a single PrismaClient instance across serverless invocations
const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient();
}

export const prisma = globalForPrisma.prisma;


