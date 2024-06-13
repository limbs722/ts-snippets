// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function sequenceChange3(arr: number[], k: number) {
    return arr.map((v) => k % 2 === 0 ? (v + k) : (v * k));
}