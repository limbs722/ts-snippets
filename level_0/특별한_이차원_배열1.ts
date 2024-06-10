// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function specialArray1(n: number) {
    return Array.from(Array(n), (v, i) => Array.from(Array(n), (_, j) => {
        if (i === j) return 1;
        return 0;
    }))
}