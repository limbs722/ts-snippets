// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function filteringMultiple(n: number, numlist: number[]) {
  return numlist.filter((v) => v % n === 0);
}