export function getMostFrequentLevel(levels) {
  const frequencyMap = {};

  // Count occurrences of each level
  levels.forEach((level) => {
    frequencyMap[level] = (frequencyMap[level] || 0) + 1;
  });

  // Find the level with the maximum count
  let mostFrequentLevel = null;
  let maxCount = 0;

  for (const [level, count] of Object.entries(frequencyMap)) {
    if (count > maxCount) {
      mostFrequentLevel = level;
      maxCount = count;
    }
  }

  return { level: Number(mostFrequentLevel), count: maxCount };
}
