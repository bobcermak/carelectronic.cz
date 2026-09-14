import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const getServerSupabase = (): SupabaseClient | null => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn("[supabase] Chybí SUPABASE_URL nebo SUPABASE_ANON_KEY.");
    return null;
  }
  return createClient(url, key, { auth: { persistSession: false } });
};