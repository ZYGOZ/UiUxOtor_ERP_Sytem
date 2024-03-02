import { memo } from "../../../memo";
import { paymentVouchers } from "../../../paymentVouchers";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(paymentVouchers.length + memo.length, {
    status: 200,
  });
}
