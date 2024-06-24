// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function rotationArray(numbers: number[], direction: string) {   
  if (direction === "right") {
      numbers.unshift(numbers.pop()!);
  } else {
      numbers.push(numbers.shift()!);
  }
  
  return numbers;
}