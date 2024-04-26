// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function makeArray5(intStrs: string[], k: number, s: number, l: number) {
    return intStrs.map((item) => Number(item.slice(s, s + l))).filter((value) => value > k);
}