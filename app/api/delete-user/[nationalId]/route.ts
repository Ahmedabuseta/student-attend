import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req:Request,{params}:{params:{nationalId:string}}) {
  const {nationalId} = params;

  const user = await db.user.delete({
    where: {
      nationalId,
    },
  });
  return NextResponse.json(user, { status: 201, headers: { 'Content-Type': 'application/json' } });
}