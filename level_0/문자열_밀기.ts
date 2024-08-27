// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function stringShift(A: string, B: string): number {
    if (A !== B) {
        let replace = A;
    
        for (const idx in A.split('')) {
            if (replace === B) {
                return Number(idx);
            }
            replace = replace.substring(-1) + replace.substring(0, A.length - 1);
        }
    }
    
    return 0;
}