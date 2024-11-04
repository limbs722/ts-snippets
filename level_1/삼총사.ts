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

function* trioGenerator(numbers: number[], n: number): Generator<number[]> {
    for (const comb of combinationGenerator(numbers, n)) {
        if (comb.reduce((acc, cur) => acc + cur, 0) === 0) {
            yield comb;
        }
    }
}

function trio(numbers: number[], n: number): number[][] {
    return [...trioGenerator(numbers, n)];
}

console.log(trio([-3, -2, -1, 0, 1, 2, 3], 3));