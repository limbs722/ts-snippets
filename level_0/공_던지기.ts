// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function throwTheBall(numbers: number[], k: number) {
  let count = 1;
  let idx = 0;
  let throwNum;
  
  while (count <= k) {
      throwNum = numbers[idx % numbers.length];
      
      if (count === k) {
          break;
      } else {
          idx += 2;
          count++;
      }
  }
  
  return throwNum;
}