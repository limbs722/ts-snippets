// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function removeOverlap(my_string: string) {
  return [...new Set(my_string)].join('');
}