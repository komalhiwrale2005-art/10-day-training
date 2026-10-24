
import { NextResponse } from "next/server";

const API_URL =
  "https://day-7-node-api.onrender.com/api/employees";

const API_KEY = process.env.API_KEY || "";

const API_HEADERS = {
  "x-api-key": API_KEY,
};

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const response = await fetch(
      `${API_URL}/${encodeURIComponent(id)}`,
      {
        method: "PUT",
        headers: {
          ...API_HEADERS,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to update employee." },
      { status: 502 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const response = await fetch(
      `${API_URL}/${encodeURIComponent(id)}`,
      {
        method: "DELETE",
        headers: API_HEADERS,
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to delete employee." },
      { status: 502 }
    );
  }
}
