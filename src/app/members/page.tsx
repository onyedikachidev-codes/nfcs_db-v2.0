import MembersList from "@/components/ui/MembersList";
import { getMembers } from "@/api/index";
import React from "react";

export const metadata = {
  title: "All Members",
};

export default async function Page() {
  const { members, count } = await getMembers();
  return (
    <div>
      <MembersList members={members} count={count} />
    </div>
  );
}
