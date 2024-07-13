// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function makeMax2(numbers: number[]) {
  const len = numbers.length
  const orderd = numbers.sort((a, b) => a - b);

  return Math.max(orderd[0] * orderd[1], orderd[len - 1] * orderd[len - 2]);
}