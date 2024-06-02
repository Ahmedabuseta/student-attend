import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    username,
    address,
    phone,
    nationalId,
    garaduateYear,
    goal,
    governate,
  } = await req.json();
  const phoneKey = phone.slice(0, 2);
  const nationalIdKey = nationalId.slice(0, 2);
  try {
    if (nationalIdKey !== "30")
      return new NextResponse("Invalid National Id Key", { status: 400 });
    if (phoneKey !== "01")
      return new NextResponse("Invalid Phone Key", { status: 400 });
    if (
      nationalId.length !== 14 ||
      phone.length !== 11 ||
      garaduateYear.length !== 4
    )
      return new NextResponse("Invalid Data", { status: 400 });
    if (
      !phone.match(/^[0-9]*$/) ||
      !nationalId.match(/^[0-9]*$/) ||
      !garaduateYear.match(/^[0-9]*$/)
    )
      return new NextResponse("Number format is incorrect", { status: 400 });

    // Check if national ID already exists
    const existingNationalIdUser = await db.user.findFirst({
      where: { nationalId },
    });

    // Check if phone number already exists
    const existingPhoneUser = await db.user.findFirst({
      where: { phone },
    });

    // If either national ID or phone number already exists, return an error response
    if (existingNationalIdUser || existingPhoneUser) {
      return new NextResponse("National ID or Phone Number already exists", {
        status: 400,
      });
    } else {
      const user = await db.user.create({
        data: {
          username,
          phone,
          address,
          nationalId,
          garaduateYear,
          goal,
          governate,
        },
      });
      return NextResponse.json(JSON.stringify(user), { status: 201 });
    }
  } catch (error) {
    console.error("[users]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const users = await db.user.findMany();
    return NextResponse.json(users, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[users]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
