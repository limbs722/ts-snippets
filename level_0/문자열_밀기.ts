// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function stringShift(A: string, B: string): number {
    if (A === B) return 0;
    
    let replace = A;

    for (const idx in [...A]) {
        if (replace === B) {
            return Number(idx);
        }
        replace = replace.substring(-1) + replace.substring(0, A.length - 1);
    }
    
    return -1;
}