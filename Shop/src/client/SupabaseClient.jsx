import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ffozbzioarasbtzmfwzn.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmb3piemlvYXJhc2J0em1md3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDgyODEsImV4cCI6MjAyNjM4NDI4MX0.GDA6TuH1pWqVgE7od7Kgt16DrRIByR36qy6yD704qVQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
