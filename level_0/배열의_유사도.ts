// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function similarity(s1: number[], s2: number[]) {
  return s1.filter((v) => s2.indexOf(v) !== -1).length;
}