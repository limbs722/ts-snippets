// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function findRemainZero(arr: number[], divisor: number): number[] {
    const filteredArr = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
    
    return filteredArr.length > 0 ? filteredArr : [-1];
}