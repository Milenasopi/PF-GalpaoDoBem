import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xlnvztjxtfbyahbwrjco.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsbnZ6dGp4dGZieWFoYndyamNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNjY2ODgsImV4cCI6MjA3OTg0MjY4OH0.aSbmvKqjw1EZwwFt_CN9jTQUYkW1PZlH_3Fco3m7vw4"
);
