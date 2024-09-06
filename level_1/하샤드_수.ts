// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function sumOfDigits(n: number): number {
    return String(n).split('').reduce((acc, value) => acc + Number(value), 0);
}

function harshadNumber(x: number): boolean {
    const digitsSum = sumOfDigits(x);
    return x % digitsSum === 0;
}