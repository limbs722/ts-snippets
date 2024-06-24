// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function UpperNLower(my_string: string) {
  return [...my_string].map((v) => {
      return v.toLowerCase() === v ? v.toUpperCase() : v.toLowerCase();
  }).join('');
}