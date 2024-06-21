// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function sortToString1(my_string: string) {
  let answer: number[] = [];
  
  [...my_string].forEach((v) => {
      if (Number(v) || v === '0') {
          answer.push(Number(v));
      }
  });
  return answer.sort((a, b) => a - b);
}