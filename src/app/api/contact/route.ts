import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nombre, mensaje } = await req.json() as { nombre: string; mensaje: string };

    if (!nombre?.trim() || !mensaje?.trim()) {
      return NextResponse.json({ ok: false, msg: "Faltan campos obligatorios." }, { status: 400 });
    }

    // ── Aquí puedes conectar un servicio de email (Resend, SendGrid, etc.) ──
    console.log(`[CONTACTO] ${nombre}: ${mensaje}`);

    return NextResponse.json({ ok: true, msg: "¡Mensaje recibido! Te contactamos pronto 🍕" });
  } catch {
    return NextResponse.json({ ok: false, msg: "Error interno." }, { status: 500 });
  }
}
