import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { name, email, rating, feedback, timestamp } = await req.json();

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // chave secreta DO SERVIDOR
    );

    const { error, data } = await supabase.from("feedback").insert([
      {
        name,
        email,
        rating,
        feedback,
        created_at: timestamp,
      },
    ]);

    if (error) {
      console.error("Erro Supabase:", error);
      return NextResponse.json(
        { error: "Erro ao salvar no banco" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Erro API:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
