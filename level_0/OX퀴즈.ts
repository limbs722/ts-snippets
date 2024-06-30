// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz: string[]) {
  const ops = {
      '+': (a:number, b: number) => a + b,
      '-': (a: number, b: number) => a - b,
  }
  
  return quiz.map((item) => {
      const [a, op, b, _, answer] = item.split(' ');
      
      return ops[op](Number(a), Number(b)) === Number(answer) ? "O" : "X";
  })
}