import supabase from "@/lib/supabase";

export async function getMembers(
  page: number,
  pageSize: number,
  sortField: "level" | string,
  sortOrder: "asc" | string
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  // Prepare the sorting logic for each field
  let orderField;
  if (sortField === "level") {
    orderField = "level";
  } else if (sortField === "date") {
    orderField = "date";
  } else {
    orderField = "name";
  }

  const {
    data: members = [],
    error,
    count,
  } = await supabase
    .from("members")
    .select("*", { count: "exact" })
    .order(orderField, { ascending: sortOrder === "asc" })
    .range(from, to);

  if (error) {
    console.error(error);
    throw new Error("Member could not be loaded");
  }

  return { members, count };
}

export async function getMember(id: string) {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Member could not be loaded");
  }

  return data;
}

export async function fetchLevels() {
  const { data, error } = await supabase.from("members").select("level");

  if (error) {
    console.error("Error fetching levels:", error);
    return [];
  }

  // Return an array of levels
  return data.map((item) => item.level);
}

export async function fetchFaculty() {
  const { data, error } = await supabase.from("members").select("faculty");

  if (error) {
    console.error("Error fetching faculty:", error);
    return [];
  }

  // Return an array of levels
  const faculties = data.map((item) => item.faculty);

  const facultyCount = faculties.reduce((acc, faculty) => {
    acc[faculty] = (acc[faculty] || 0) + 1;
    return acc;
  }, {});

  // Find the faculty with the maximum count
  let mostFrequentFaculty = "";
  let maxCount = 0;

  for (const faculty in facultyCount) {
    if (facultyCount[faculty] > maxCount) {
      mostFrequentFaculty = faculty;
      maxCount = facultyCount[faculty];
    }
  }

  return { faculty: mostFrequentFaculty, count: maxCount };
}

export async function fetchState() {
  const { data, error } = await supabase.from("members").select("state");

  if (error) {
    console.error("Error fetching state:", error);
    return [];
  }

  // Return an array of levels
  const states = data.map((item) => item.state);

  const stateCount = states.reduce((acc, state) => {
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {});

  // Find the state with the maximum count
  let mostFrequentState = "";
  let maxCount = 0;

  for (const state in stateCount) {
    if (stateCount[state] > maxCount) {
      mostFrequentState = state;
      maxCount = stateCount[state];
    }
  }

  return { state: mostFrequentState, count: maxCount };
}

export async function getLevel() {
  const { data, error } = await supabase.from("members").select("level");

  if (error) {
    console.error("Error fetching levels:", error);
    return;
  }

  const levelCounts: Record<string, number> = {
    100: 0,
    200: 0,
    300: 0,
    400: 0,
  };

  data.forEach(({ level }) => {
    if (level && levelCounts.hasOwnProperty(level.toString())) {
      levelCounts[level.toString()] += 1;
    }
  });

  return Object.keys(levelCounts).map((level) => ({
    level,
    count: levelCounts[level],
  }));
}
