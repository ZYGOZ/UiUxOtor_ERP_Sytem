import { paymentVouchers } from "../../../paymentVouchers";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(paymentVouchers, { status: 200 });
}
