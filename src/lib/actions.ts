"use server";

import { revalidatePath } from "next/cache";
import supabase from "./supabase";
import { signIn, signOut } from "./auth";

export async function createMemberProfile(formData: FormData) {
  const name = formData.get("name") as string;
  const level = Number(formData.get("level"));
  const department = formData.get("department") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const date = formData.get("date") as string;
  const faculty = formData.get("faculty") as string;
  const state = formData.get("state") as string;

  const newMember = {
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
    console.log(error.message);
    throw new Error("Member could not be created");
  }

  revalidatePath("/members");
  revalidatePath("/");
}

export async function deleteMember(id: string) {
  const { error } = await supabase.from("members").delete().eq("id", id);

  if (error) throw new Error("Member could not be deleted");

  revalidatePath("/members");
}

export async function updateMember(formData: FormData) {
  const memberId = Number(formData.get("id"));

  const updateData = {
    name: formData.get("name") as string,
    level: Number(formData.get("level")),
    department: formData.get("department") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    date: formData.get("date") as string,
    faculty: formData.get("faculty") as string,
    state: formData.get("state") as string,
  };

  const { error } = await supabase
    .from("members")
    .update(updateData)
    .eq("id", memberId)
    .select()
    .single();

  if (error) {
    console.log(error.message);
    throw new Error("Member profile could not be updated");
  }

  revalidatePath(`/members/${memberId}`);
  revalidatePath("/members");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/",
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}
