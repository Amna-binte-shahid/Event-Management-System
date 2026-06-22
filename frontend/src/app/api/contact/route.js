// app/api/contact/route.js  (ya src/app/api/contact/route.js)
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  console.log("Form Data Received:", body);

  // Agar request callback bar se aayi ho
  if (body.type === "callback") {
    console.log("Callback Request:", body.name, body.phone);

    return NextResponse.json(
      { message: "Callback request received! We will contact you soon." },
      { status: 200 }
    );
  }

  // Normal contact form ka data
  return NextResponse.json(
    { message: "Message received successfully!" },
    { status: 200 }
  );
}
