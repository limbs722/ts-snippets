// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function yinNyang(absolutes: number[], signs: boolean[]): number {
    let sum = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            sum += v;
        } else {
            sum -= v;
        }
    });
    
    return sum;
}