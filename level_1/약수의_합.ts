// https://school.programmers.co.kr/learn/courses/30/lessons/12928
import _ from 'lodash';

function getDivisors(n: number): number[] {
    const result = [];
    let count = 1;

    while (count <= n) {
        if (n % count === 0) {
            result.push(count);
        }
        count++;
    }

    return result;
}

function sumOfDivisor(n: number): number {
    const result = getDivisors(n);
    return _.sum(result);
}

console.log(sumOfDivisor(12)); // 28