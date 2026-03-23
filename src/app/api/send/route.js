import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 },
      );
    }

    const phoneLine = phone ? `\n*Phone:* ${phone}` : "";
    const text =
      `📩 *New Portfolio Message*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}` +
      phoneLine +
      `\n\n*Message:*\n${message}`;

    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Telegram API error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /send error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
