// https://school.programmers.co.kr/learn/courses/30/lessons/120863


function sumPolynomial(polynomial: string) {
  const splited = polynomial.split(' + ');
  
  let sumX = 0;
  let sumC = 0;
  
  splited.forEach((v) => {
      if (v.includes('x')) {
          const n = v.replace('x', '');
          sumX += Number(n) || 1;
      } else {
          sumC += Number(v);
      }
  })
  
  let answer = [];
  if (sumX) {
      answer.push(`${sumX === 1 ? '' : sumX}x`)
  }
  if (sumC) {
      answer.push(sumC);
  }

  return answer.join(' + ');
}