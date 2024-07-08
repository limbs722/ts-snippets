// https://school.programmers.co.kr/learn/courses/30/lessons/120909

function checkSquare(n: number) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}