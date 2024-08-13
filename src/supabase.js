import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tkaczdnuxudjsnftozqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrYWN6ZG51eHVkanNuZnRvenFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MzMwMDIsImV4cCI6MjAzOTEwOTAwMn0.EVgf8hiYaK-X77wCq4y05bk2lST6VPB7b-tdpVsZl2Q";
const supabase = createClient(supabaseUrl, supabaseKey, {
    headers: {
      apikey: supabaseKey,
    },
  });

export default supabase;
