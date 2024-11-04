// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function* combinationGenerator(numbers: number[], num: number, current: number[] = []): Generator<number[]> {
    if (num === 0) {
        if (current.reduce((acc, cur) => acc + cur, 0) === 0) {
            yield current;
        }
        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        yield* combinationGenerator(numbers.slice(i + 1), num - 1, [...current, numbers[i]]);
    }
}

function trio(numbers: number[], n: number): number[][] {
    return [...combinationGenerator(numbers, n)];
}

console.log(trio([-3, -2, -1, 0, 1, 2, 3], 3));