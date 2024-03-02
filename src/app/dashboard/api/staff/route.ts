import { staff } from "../../../staff";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(staff, { status: 200 });
}
