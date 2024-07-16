// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num: number, k: number) {
  const index = String(num).indexOf(String(k));

  return index + 1 || -1;
}