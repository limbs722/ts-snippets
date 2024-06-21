// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function factorialRecursive(n: number): number {
	return n === 1 ? 1 : n * factorialRecursive(n - 1);
}

function factorial(n: number) {
  let index = 1;
  
  while (true) {
      const factorial = factorialRecursive(index);
      
      if (factorial > n) {
          index--;
          break;
      }
      index++;
  }
  
  return index;
}