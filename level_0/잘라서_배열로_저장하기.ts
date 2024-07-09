// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function saveToArraySlicedString(my_str: string, n: number) {
  let answer = [];
  
  for (let i = 0; i < my_str.length; i += n) {
      answer.push(my_str.substring(i, i + n));
  }
  
  return answer;
}