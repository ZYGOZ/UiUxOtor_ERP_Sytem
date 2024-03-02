import { memo } from "../../../memo";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(memo, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const employeeIndex = memo.findIndex((employee: any) => {
    return employee.id == id;
  });

  if (employeeIndex !== -1) {
    memo.splice(employeeIndex, 1);

    return NextResponse.json(memo[employeeIndex], { status: 204 });
  } else {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }
}
