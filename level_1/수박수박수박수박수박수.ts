// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function repeatWatermelon(n: number): string {
    const word = "수박";
    
    return n % 2 === 0 ? word.repeat(n / 2) : word.repeat(n / 2) + word[0];
}