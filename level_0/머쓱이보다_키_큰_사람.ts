// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function tallerThan(array: number[], height: number) {
  return array.filter((v) => v > height).length;
}