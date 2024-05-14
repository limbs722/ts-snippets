// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function makeArray6(arr: number[]) {
    let stk: number[] = [];
    
    for (let item of arr) {
        if (stk.at(-1) !== item) {
            stk.push(item);
        } else {
            stk.splice(-1);
        }
    }
    
    return stk.length === 0 ? [-1] : stk;
}