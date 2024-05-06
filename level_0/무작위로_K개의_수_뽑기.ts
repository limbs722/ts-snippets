// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function randomKArr(arr: number[], k: number) {
    const set = new Set(arr);
    const result = [...set].slice(0, k);

    while (result.length !== k) {
        result.push(-1);
    }

    return result;
}