// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function makeArray6(arr: number[]) {
    let stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stk.length > 0) {
            stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i]);
        } else {
            stk.push(arr[i]);
        }
    }
    
    return stk.length === 0 ? [-1] : stk;
}