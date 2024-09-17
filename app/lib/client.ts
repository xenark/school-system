import { PrismaClient } from '@prisma/client'


declare global {
    var myclient:  PrismaClient | undefined;
}
const client = globalThis.myclient || new PrismaClient()


if (process.env.NODE_ENV !== 'production') globalThis.myclient = client

export default client;