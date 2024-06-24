// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function ctrlZ(s: string) {
  let answer = 0;
  const sp = s.split(' ');
  
  sp.forEach((v, i) => {
      if (v === 'Z') {
          answer -= Number(sp[i - 1]);
      } else {
          answer += Number(v);
      }
  })
  
  return answer;
}