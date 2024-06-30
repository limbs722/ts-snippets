// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s: string) {
  return [...new Set([...s])].filter((v) => {
      const exp = new RegExp(`${v}`, 'g');
      const result = s.match(exp) ?? [];
      return result.length === 1;
  }).sort().join('');
}