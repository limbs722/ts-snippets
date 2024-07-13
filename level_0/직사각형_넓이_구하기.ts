// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function areaOfRect(dots: number[][]) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  const xs = [x1, x2, x3, x4];
  const ys = [y1, y2, y3, y4];
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);
  
  return Math.abs(width * height);
}