// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function dotPoint(dot: number[]) {
  const [x, y] = dot;
  const check = x * y > 0;
  
  // if (check) {
  //     // 1, 3 분면
  //     return x > 0 ? 1 : 3;
  // } else {
  //     // 2, 4 분면
  //     return x > 0 ? 4 : 2;
  // }
  
  return x > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}