// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function makeMax(numbers: number[]) {
  const [i, j] = numbers.sort((a, b) => b - a);
    
  return i * j;
}