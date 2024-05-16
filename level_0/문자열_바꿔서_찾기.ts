// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function stringReplaceFind(myString: string, pat: string) {
    return [...myString].map((v) => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}