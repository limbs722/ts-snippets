// https://school.programmers.co.kr/learn/courses/30/lessons/12947

// 각 자릿수 더하기
function sumOfDigits(n: number): number {
    let rem = n;
    let sum = 0;

    while(true) {
        sum += rem % 10;
        rem = Math.trunc(rem / 10);
        if (rem === 0) {
            break;
        }
    }
    return sum;
}

function harshadNumber(x: number): boolean {
    const digitsSum = sumOfDigits(x);
    return x % digitsSum === 0;
}