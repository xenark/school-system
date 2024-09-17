import client from "@/app/lib/client";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const data = await request.json();
    const { email, password, name } = data;

    if (!email || !password || !name) return;

    const add_user = await client.user.create({
        data: {
            email, hashedPassword, name
        }
    })
    return NextResponse.json(add_user);
}