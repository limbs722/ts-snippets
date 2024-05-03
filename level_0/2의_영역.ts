// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function twoArea(arr: number[]) {
    const start = arr.indexOf(2);
    const last = arr.lastIndexOf(2);
    
    return start < 0 ? [-1] : arr.slice(start, last + 1);
}