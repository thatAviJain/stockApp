// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ysqjhsyuwlikldkanpfj.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcWpoc3l1d2xpa2xka2FucGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MDQwNjUsImV4cCI6MjA2NzI4MDA2NX0.N1ZaHeRj_RHkdv_av8pYNgpgyMcvxN6cSFYTRtyyr-A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
