import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tfyblvgagchsbpegwesl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmeWJsdmdhZ2Noc2JwZWd3ZXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzOTM5NDAsImV4cCI6MjA2Nzk2OTk0MH0.w8HxerGPHKTaLzlOdpNJvh4QCzhnInJZ7tYnN0WpEpk"

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;