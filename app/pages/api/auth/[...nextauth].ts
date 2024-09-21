import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import client from '@/app/lib/client';
import bcrypt from 'bcrypt';
export const authoptions: AuthOptions = {
    adapter: PrismaAdapter(client),
    providers: [

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials!');
                }

                const user = await client.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                //upon response check if there is a user and the user has pw

                if (!user ) {
                    throw new Error('Wrong credentials!')
                }

                const verify_password = await bcrypt.compare(credentials?.password, 'f');

                if (!verify_password) {
                    throw new Error('Wrong credentials!')
                }
                return user;
            },
        })
    ]
}