// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function calcString(my_string: string) {
  const calcArr = my_string.split(' ');

  const ops = {
      '+': (a: number, b: number) => a + b,
      '-': (a: number, b: number) => a - b
  };
  
  let answer = Number(calcArr[0]);
  let op = ''
  
  calcArr.forEach((v, i) => {
      if (i === 0) return;
      
      if (i % 2 === 0) {
          answer = ops[op](answer, Number(v));
      } else {
          op = v;
      }
  });
  
  return answer;
}