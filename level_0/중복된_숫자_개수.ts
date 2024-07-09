// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function numberOfDuplicatedNumber(array: number[], n: number) {
  return array.filter((v) => v === n).length;
}