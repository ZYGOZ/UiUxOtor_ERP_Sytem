import { NextResponse } from "next/server";
interface Data {
    id: string;
    name: string;
    value: string;
  }
  
  const data: Data[] = [
    {
        id: "1",
        name: "Pending",
        value: "80",
      }, {
        id: "2",
        name: "Approved",
        value: "370",
      }, {
        id: "3",
        name: "Rejected",
        value: "50",
      },
  ]
export async function GET() {
  return NextResponse.json(data, {
    status: 200,
  });
}
