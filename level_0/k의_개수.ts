// https://school.programmers.co.kr/learn/courses/30/lessons/120887
import _ from 'lodash';

function numberOfK(i: number, j: number, k: number) {
    // const len = j - i;
    // const strArr = Array.from({ length: len + 1 }, (_, idx) => i + idx).join('');
    // lodash 사용
    const strArr = _.range(i, j + 1).map((x) => x.toString());
    return [...strArr].filter((v) => v === k.toString()).length;
}

console.log(numberOfK(1, 13, 1)); // 6