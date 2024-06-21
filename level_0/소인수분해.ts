// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function primeNumber(n: number) {
  let answer = [];
  let num = 2;
  
  while (n !== 1) {
      if (n % num === 0) {
          answer.push(num);

          while (n % num === 0) {
              n = n / num; 
          }
      }
      num++;
  }
  return answer;
}