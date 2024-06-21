// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function addHideNumber1(my_string: string) {
  const filtered = [...my_string].filter((v) => !!Number(v) || v === '0');
  
  return filtered.reduce((acc, value) => acc + Number(value), 0);
}