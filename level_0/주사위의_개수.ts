// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function numberOfDies(box: number[], n: number) {
  return box.reduce((acc, value) => acc * (Math.trunc(value / n)), 1);
}