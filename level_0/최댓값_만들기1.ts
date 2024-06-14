// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function makeMax(numbers: number[]) {
  const sortedNum = numbers.sort((a, b) => b - a);
  
  return sortedNum[0] * sortedNum[1];
}