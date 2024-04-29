// https://school.programmers.co.kr/learn/courses/30/lessons/181895

function makeArray3(arr: number[], intervals: number[][]) {
    const [a1, b1] = intervals[0];
    const [a2, b2] = intervals[1];

    return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}