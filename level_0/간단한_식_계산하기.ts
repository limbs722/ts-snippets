// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function simpleCalc(binomial: string) {
    const [a, op, b] = binomial.split(' ');

    const ops = {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
    };

    return ops[op](Number(a), Number(b));
}