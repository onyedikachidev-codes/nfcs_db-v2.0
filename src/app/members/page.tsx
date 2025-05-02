import { getMembers } from "@/lib/actions";
import React from "react";

export const metadata = {
  title: "All Members",
};

export default async function Page() {
  const { members, count } = await getMembers();
  return <div>Members Page</div>;
}
