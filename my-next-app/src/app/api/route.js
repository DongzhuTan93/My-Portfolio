
import { NextResponse } from "next/server";

// Use Postman to send the GET request to: http://localhost:3000/api/.
export async function GET() {
  return NextResponse.json({ message: "Hello World from a GET requset" }, { status: 200 });
}

// Use Postman to send the POST request to: http://localhost:3000/api/.
export async function POST() {
  return NextResponse.json({ message: "Hello World from a POST request" }, { status: 200 });
}

// https://stackoverflow.com/questions/75418329/how-do-you-put-api-routes-in-the-new-app-folder-of-next-js
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// https://nextjs.org/docs/app/building-your-application/routing