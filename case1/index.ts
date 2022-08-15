export const findFirstDuplicateInArray = (arr: number[]): number => {
  const seen = new Set<number>();
  for (const num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return -1;
}