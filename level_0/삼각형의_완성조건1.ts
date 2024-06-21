// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function triangle1(sides: number[]) {
  const max = Math.max(...sides);
  const sideSum = sides.reduce((acc, value) => acc + value, 0) - max;
  
  return max < sideSum ? 1 : 2;
}