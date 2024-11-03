import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_NATIVE_SUPABASE_URL!;
// const supabaseAnonKey = process.env.REACT_NATIVE_SUPABASE_ANON_KEY!;

export const supabase = createClient(
  "https://tuohbgfrxcreirldxjbb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1b2hiZ2ZyeGNyZWlybGR4amJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MDY1OTMsImV4cCI6MjA0NjE4MjU5M30.uZ0suu2VWYXA3eEdXlY54TiIVjE-44e7bQqrvln9GTw",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

AppState.addEventListener("change", (state) => {
  if (state === "active") supabase.auth.startAutoRefresh();
  else supabase.auth.stopAutoRefresh();
});
