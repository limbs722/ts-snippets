// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function numberOfK(i: number, j: number, k: number) {
    const len = j - i;
    const strArr = Array.from({ length: len + 1 }, (_, idx) => i + idx).join('');
    
    return [...strArr].filter(v => v === k.toString()).length;
}