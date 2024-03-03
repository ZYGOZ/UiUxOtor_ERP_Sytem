import { memo } from "../../../memo";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(memo, { status: 200 });
}

