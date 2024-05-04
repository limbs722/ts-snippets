// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function countPatInString(myString: string, pat: string) {
    return [...myString].reduce((acc, value, idx) => {
        const currStr = myString.slice(idx, pat.length + idx);
        
        return currStr === pat ? acc + 1 : acc;
    }, 0);
}