// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function findMaxNumber(array: number[]) {
  const max = Math.max(...array);
  
  return [max, array.indexOf(max)];
}