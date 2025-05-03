"use server";

import supabase from "./supabase";
import { revalidatePath } from "next/cache";

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

export async function deleteMember(id: number) {
  const { error } = await supabase.from("members").delete().eq("id", id);

  if (error) throw new Error("Member could not be deleted");

  revalidatePath("/members");
}

export async function updateMemberFromClient(member: {
  id: number;
  name: string;
  level: number;
  department?: string | null;
  phoneNumber: string;
  date: string;
  faculty: string;
  state: string;
}) {
  const { id, ...updateData } = member;

  const { error } = await supabase
    .from("members")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("Member profile could not be updated");
  }

  revalidatePath(`/members/${id}`);
  revalidatePath("/members");
}
