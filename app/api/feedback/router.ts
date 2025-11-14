import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // Handle error
            }
          },
        },
      }
    );

    const body = await request.json();

    const { data, error } = await supabase
      .from("feedback")
      .insert([
        {
          name: body.name,
          email: body.email,
          rating: body.rating,
          feedback: body.feedback,
          created_at: body.timestamp,
        },
      ])
      .select();

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
