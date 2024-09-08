// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function integerToDescOrder(n: number): number {
    const descaded = String(n).split('').sort((a, b) => Number(b) - Number(a)).join('');
    
    return Number(descaded);
}