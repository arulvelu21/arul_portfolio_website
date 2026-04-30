import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("https://n8n.arulvelu21.cloud/webhook/1892f39c-2cb5-481d-a53e-9a711e31dad1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error("n8n responded with an error:", response.status, errorText);
      return NextResponse.json({ success: false, error: "n8n error" }, { status: response.status });
    }
  } catch (error) {
    console.error("Failed to forward request to n8n:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
