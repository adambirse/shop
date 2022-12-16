export function sum(...numbers: number[]): number {
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.reduce((initial, current) => initial + current);
}
