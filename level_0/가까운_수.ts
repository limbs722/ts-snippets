// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function nearByNum(array: number[], n: number) {
  const compared = array.map((v) => {
      return [v, Math.abs(v - n)];
  });
  
  return compared.sort(([a_org, a_abs], [b_org, b_abs]) => a_abs - b_abs)[0][0];
}