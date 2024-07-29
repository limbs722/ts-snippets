// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function makeMax2(numbers: number[]) {
  const orderd = numbers.sort((a, b) => a - b);

  return Math.max(orderd.at(0) * orderd.at(1), orderd.at(-1) * orderd.at(-2));
}