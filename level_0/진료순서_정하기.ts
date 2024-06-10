// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency: number[]) {
    // ...emergency
    const sorted = [...emergency].sort((a, b) => b - a);
    return emergency.map((v) => sorted.indexOf(v) + 1);
}