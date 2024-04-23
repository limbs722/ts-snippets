// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function makeArray4(arr: number[]) {
    let stk: number[] = [];

    for(let i = 0; i < arr.length;) {
        if (stk.length === 0 || stk.slice(-1)[0] < arr[i]) {
            stk = [...stk, arr[i]];
            i++;
            continue;
        }
        stk.pop();
    }

    return stk;
}