// https://school.programmers.co.kr/learn/courses/30/lessons/181878

function findWord(myString: string, pat: string) {
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}