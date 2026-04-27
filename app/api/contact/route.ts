import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// NOTE: This saves submissions to a local JSON file.
// When you deploy to Vercel, replace this with a database like Supabase.
// See README for instructions.

const DATA_FILE = path.join(process.cwd(), "contact-submissions.json");

function readSubmissions() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Sanitize inputs (prevent XSS)
    const sanitize = (str: string) =>
      str.replace(/[<>]/g, "").trim().slice(0, 1000);

    const submission = {
      id: Date.now(),
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message),
      timestamp: new Date().toISOString(),
    };

    // Save to file
    const submissions = readSubmissions();
    submissions.push(submission);
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET — view all submissions (protect this route before going live!)
export async function GET() {
  const submissions = readSubmissions();
  return NextResponse.json(submissions);
}
