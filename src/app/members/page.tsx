import React from "react";
import { getMembers } from "@/api/index";

import MembersList from "@/components/ui/MembersList";
import { PAGE_SIZE } from "../_constants";

export const metadata = {
  title: "All Members",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const resolvedParams = await searchParams;
  let page = parseInt(resolvedParams.page, 10);
  page = !page || page < 1 ? 1 : page;

  const { members, count: rawCount } = await getMembers(page, PAGE_SIZE);
  const count = rawCount || 1;

  return (
    <div>
      <MembersList members={members} count={count} />
    </div>
  );
}
