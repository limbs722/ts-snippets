// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function decode(cipher: string, code: number) {
  return [...cipher].filter((_, i) => (i + 1) % code === 0).join('');
}