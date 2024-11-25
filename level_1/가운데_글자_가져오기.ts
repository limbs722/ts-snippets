// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function getMidString(s: string): string {
    const len = s.length;
    const half = Math.trunc(len / 2);
    
    if (len % 2 === 0) {
        return s[half - 1] + s[half];
    } else {
        return s[half];
    }
}