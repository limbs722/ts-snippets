// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function integerSqrt(n: number): number {
    const sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) {
        return -1;
    }
    
    return Math.pow(sqrt + 1, 2);
}