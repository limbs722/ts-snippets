// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function numberOfPY(s: string): boolean{
    const pMatches = s.match(/p/ig);
    const yMatches = s.match(/y/ig);
    return pMatches !== null && yMatches !== null && pMatches.length === yMatches.length;
}