export const sample = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export function range(length: number) {
  return Array.from(Array(length).keys());
}
