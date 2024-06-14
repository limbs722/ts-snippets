// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function factorialRecursive(n: number): number {
  if (n === 1) {
      return 1;
  } else {
      return n * factorialRecursive(n - 1);
  }
}

function factorial(n: number) {
  let index = 1;
  
  while (true) {
      const factorial = factorialRecursive(index);
      
      if (factorial > n) {
          index--;
          break;
      } else {
          index++;
      }
  }
  
  return index;
}