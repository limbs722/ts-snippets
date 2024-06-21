// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function findLastStr(myString: string, pat: string) {
    const lastIdx = myString.lastIndexOf(pat);
    return myString.slice(0, lastIdx + pat.length);
}