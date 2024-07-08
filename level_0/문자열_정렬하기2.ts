// https://school.programmers.co.kr/learn/courses/30/lessons/120911

function sortToString2(my_string: string) {
  const toLow = [...my_string].map((v) => v.toLowerCase());
  return toLow.sort().join('');
}