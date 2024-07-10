// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function getFactors(n: number) {
  let count = 1;
  let answer = [];
  
  while (count <= n) {
      if (n % count === 0) {
          answer.push(count);
      }
      count++;
  }
  
  return answer;
}