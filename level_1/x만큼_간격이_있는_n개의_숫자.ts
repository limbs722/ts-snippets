// https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function intervalX(x: number, n: number) {
    return Array.from({ length: n }, (_, i) => (i + 1) * x);
}