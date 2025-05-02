export const PAGE_SIZE = 8;

export const faculties = [
  "Arts",
  "Education",
  "Law",
  "Management Science",
  "Media and Communication",
  "Science",
  "Social Science",
  "Transport",
];

export const statesOfNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Abuja",
];

export function getMostFrequentLevel(levels: number[]): {
  level: number | null;
  count: number;
} {
  const frequencyMap: Record<number, number> = {};

  // Count occurrences of each level
  levels.forEach((level) => {
    frequencyMap[level] = (frequencyMap[level] || 0) + 1;
  });

  // Find the level with the maximum count
  let mostFrequentLevel: number | null = null;
  let maxCount = 0;

  for (const [levelStr, count] of Object.entries(frequencyMap)) {
    const level = Number(levelStr);
    if (count > maxCount) {
      mostFrequentLevel = level;
      maxCount = count;
    }
  }

  return { level: mostFrequentLevel, count: maxCount };
}
