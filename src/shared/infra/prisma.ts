import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

// O adaptador da versão 7 espera um objeto com a 'url'
const adapter = new PrismaBetterSqlite3({
    url: "file:./dev.db"
});

export const prisma = new PrismaClient({ adapter });