import supabase from "@/lib/supabase";

interface LevelCountsProps {
  100: number;
  200: number;
  300: number;
  400: number;
}

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

export async function getLevel() {
  const { data, error } = await supabase.from("members").select("level");

  if (error) {
    console.error("Error fetching levels:", error);
    return;
  }

  const levelCounts: LevelCountsProps = { 100: 0, 200: 0, 300: 0, 400: 0 };

  data.forEach(({ level }) => {
    if (level && level in levelCounts) {
      levelCounts[level as keyof LevelCountsProps] += 1;
    }
  });

  return Object.keys(levelCounts).map((level) => ({
    level: Number(level),
    count: levelCounts[Number(level) as keyof LevelCountsProps],
  }));
}

interface FacultyResult {
  faculty: string;
  count: number;
}

export async function fetchFaculty(): Promise<FacultyResult> {
  const { data, error } = await supabase.from("members").select("faculty");

  if (error) {
    console.error("Error fetching faculty:", error);
    return { faculty: "", count: 0 };
  }

  // Type guard to ensure data is not null/undefined
  if (!data || data.length === 0) {
    return { faculty: "", count: 0 };
  }

  // Extract faculties and filter out null/undefined values
  const faculties = data
    .map((item) => item.faculty)
    .filter(
      (faculty): faculty is string => faculty !== null && faculty !== undefined
    );

  // Count faculty occurrences
  const facultyCount = faculties.reduce<Record<string, number>>(
    (acc, faculty) => {
      acc[faculty] = (acc[faculty] || 0) + 1;
      return acc;
    },
    {}
  );

  // Find the most frequent faculty
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

export async function fetchLevels() {
  const { data, error } = await supabase.from("members").select("level");

  if (error) {
    console.error("Error fetching levels:", error);
    return [];
  }

  // Return an array of levels
  return data.map((item) => item.level);
}

interface StateResult {
  state: string;
  count: number;
}

export async function fetchState(): Promise<StateResult> {
  const { data, error } = await supabase.from("members").select("state");

  if (error) {
    console.error("Error fetching state:", error);
    return { state: "", count: 0 };
  }

  // Type guard for empty data
  if (!data || data.length === 0) {
    return { state: "", count: 0 };
  }

  // Filter out null/undefined states and ensure they're strings
  const states = data
    .map((item) => item.state)
    .filter((state): state is string => typeof state === "string");

  // Type the accumulator explicitly
  const stateCount = states.reduce<Record<string, number>>((acc, state) => {
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {});

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

export async function searchMembersByName(query: string) {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .ilike("name", `%${query}%`)
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
