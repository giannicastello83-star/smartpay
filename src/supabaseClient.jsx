import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ycsqkkupncgzwihmamtu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inljc3Fra3VwbmNnendpaG1hbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTYwODgsImV4cCI6MjA3ODUzMjA4OH0.sL5lsjNmk7WhIE9EyMUF90Q_KymcK0tgt7xhCih9LTA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
