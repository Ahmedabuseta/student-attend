import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export default async function GET() {
  try {
    const users = await db.user.findMany();
    return NextResponse.json(JSON.stringify(users), { status: 201, headers: { 'Content-Type': 'application/json' } });
  }  catch (error) {
    console.error("[users]", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }}

