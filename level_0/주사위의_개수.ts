// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function numberOfDies(box: number[], n: number) {
  const dies = box.map((v) => Math.trunc(v / n));
  return dies.reduce((acc, value) => acc * value, 1);
}