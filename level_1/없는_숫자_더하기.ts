// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function sumWithoutNumber(numbers: number[]): number {
    const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    zeroToNine.forEach((v) => {
        if (!numbers.includes(v)) {
            sum += v;
        }
    })
    
    return sum;
}