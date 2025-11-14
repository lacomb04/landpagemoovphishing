import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Configuração Supabase não encontrada" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await request.json();

    const { data, error } = await supabase.from("feedback").insert([
      {
        name: body.name,
        email: body.email,
        rating: body.rating,
        feedback: body.feedback,
      },
    ]);

    if (error) {
      console.error("[v0] Erro Supabase:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error("[v0] Erro ao processar feedback:", error);
    return NextResponse.json(
      { error: "Erro ao processar feedback" },
      { status: 500 }
    );
  }
}
