// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function nearByOne(arr: number[], idx: number) {
    return arr.findIndex((v, i) => v === 1 && i >= idx) ?? -1;
}