// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function reverseNtoArr(n: number): number[] {
    const reverseArr = [...String(n)].reverse();
    return reverseArr.map((v) => Number(v));
}