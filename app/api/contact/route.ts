import { prisma } from "../../lib/prisma";

// In-memory rate limiter: max 5 requests per IP per 10 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= LIMIT) return false;

  entry.count++;
  return true;
}

export async function POST(request: Request) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Parse body safely
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  // Type checks
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  // Presence checks
  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  // Length limits
  if (trimmedName.length > 100) {
    return Response.json({ error: "Name is too long." }, { status: 400 });
  }
  if (trimmedEmail.length > 254) {
    return Response.json({ error: "Email is too long." }, { status: 400 });
  }
  if (trimmedMessage.length > 2000) {
    return Response.json({ error: "Message is too long (max 2000 characters)." }, { status: 400 });
  }

  // Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  await prisma.contact.create({
    data: { name: trimmedName, email: trimmedEmail, message: trimmedMessage },
  });

  return Response.json({ success: true }, { status: 201 });
}
