// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function make2D(num_list: number[], n: number) {
  let answer = [];
  
  for (let i = 0; i < num_list.length; i += n) {
      answer.push(num_list.slice(i, i + n));
  }
  
  return answer;
}