// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function sumConsecutiveNum(num: number, total:number): number[] {
    const center = Math.trunc(total / num);
    const side = Math.trunc(num / 2);
    const remain = num % 2 === 0;
    
    const range = (center: number) =>
    Array.from({ length: num }, (_, i) => i + (center - side));
    
    return range(center + Number(remain));
}