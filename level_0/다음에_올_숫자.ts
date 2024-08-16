// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function nextNumber(common: number[]): number {
    const [first, second, third] = common;
    const len = common.length;
    const check = (second - first) === (third - second)
    
    if (check) {
        const diff = second - first;
        return first + (len * diff);
    } else {
        const equidistant = second / first;
        return equidistant * common[len - 1];
    }
}