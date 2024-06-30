// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function addToDigits(n: number) {
  return [...String(n)].reduce((acc, value) => acc + Number(value), 0);
}