
import { NextResponse } from "next/server";

const API_URL = "https://day-7-node-api.onrender.com/api/employees";

const API_HEADERS = {
  "x-api-key":
    process.env.API_KEY ||
    process.env.NEXT_PUBLIC_API_KEY ||
    "",
};

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: API_HEADERS,
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect to the backend API.",
      },
      { status: 502 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...API_HEADERS,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect to the backend API.",
      },
      { status: 502 }
    );
  }
}
