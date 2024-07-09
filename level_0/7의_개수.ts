// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function numberOfSeven(array: number[]) {
  const toStr = array.join('');
  return [...toStr].filter((v) => v === '7').length;
}