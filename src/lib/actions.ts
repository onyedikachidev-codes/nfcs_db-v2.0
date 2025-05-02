import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "./supabase";
import { revalidatePath } from "next/cache";

export async function getMembers() {
  const {
    data: members = [],
    error,
    count,
  } = await supabase.from("members").select("*", { count: "exact" });

  if (error) {
    console.error(error);
    throw new Error("Member could not be loaded");
  }

  return { members, count };
}

interface MemberProfile {
  name: string | null;
  level: number;
  department: string | null;
  phoneNumber: string | null;
  date: string | null;
  faculty: string | null;
  state: string | null;
}

export async function createMemberProfile(formData: FormData): Promise<void> {
  // Extract values from FormData with type safety
  const name = formData.get("name") as string | null;
  const level = Number(formData.get("level")) || 0; // Provide default value if null/NaN
  const department = formData.get("department") as string | null;
  const phoneNumber = formData.get("phoneNumber") as string | null;
  const date = formData.get("date") as string | null;
  const faculty = formData.get("faculty") as string | null;
  const state = formData.get("state") as string | null;

  const newMember: MemberProfile = {
    name,
    level,
    department,
    phoneNumber,
    date,
    faculty,
    state,
  };

  const { error } = await supabase.from("members").insert([newMember]);

  if (error) {
    console.error(error.message);
    throw new Error("Member could not be created");
  }

  revalidatePath("/members");
  revalidatePath("/");
}
