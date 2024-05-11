// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function makeArray6(arr: number[]) {
    let stk: number[] = [];
    
    for (let item of arr) {
        if (stk.length > 0) {
            if (stk.at(-1) === item) {
                stk.pop();
            } else {
                stk.push(item);
            }
        } else {
            stk.push(item);
        }
    }
    
    return stk.length === 0 ? [-1] : stk;
}