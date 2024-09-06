// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function* combinationGenerator(
    numbers: number[],
    num: number
): Generator<number[]> {
    if (num == 0) yield [];

    for (const [idx, number] of numbers.entries()) {
        const res = combinationGenerator(numbers.slice(idx + 1), num - 1);
        for (const r of res) {
            yield [number, ...r];
        }
    }
}

function trio(numbers: number[], n: number): number[][] {
    const res = [];
    for (const comb of combinationGenerator(numbers, n)) {
        if (comb.reduce((acc, cur) => acc + cur, 0) === 0) {
            res.push(comb);
        }
    }
    return res;
}

console.log(trio([-3, -2, -1, 0, 1, 2, 3], 3));